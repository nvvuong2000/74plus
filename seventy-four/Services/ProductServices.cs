using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Common.Enums;

namespace RookieOnlineAssetManagement.Services
{
    public class ProductServices : IProductServices
    {
        private readonly ApplicationDbContext _context;

        private readonly IConfiguration _config;

        private readonly IUserServices _repoUser;
        private readonly IMapper _mapper;


        private IHostingEnvironment _hostingEnv;

        public ProductServices(ApplicationDbContext context, IUserServices repoUser, IHostingEnvironment hostingEnv, IConfiguration config, IMapper mapper)
        {
            _context = context;

            _hostingEnv = hostingEnv;

            _repoUser = repoUser;

            _config = config;
            _mapper = mapper;


        }

        // This method add new product;

        public async Task<bool> addProduct([FromBody] ProductRequest product)
        {
            var stringF = "";

            var stringB = "";

            var newProduct = new Product()
            {
                CategoryId = product.CategoryId,

                ProductName = product.ProductName,

                Description = product.Description,

                UnitPrice = product.UnitPrice,

                Status = product.Status,

                IsNew = product.IsNew,

                DateCreated = Convert.ToDateTime(DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm:ss")),

                DateUpated = Convert.ToDateTime(DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm:ss")),

            };
            // add product 
            await _context.Products.AddAsync(newProduct);

            // save product

            await _context.SaveChangesAsync();

            var productId = newProduct.Id;
            try
            {
                // Save Image list of product

                foreach (var formFile in product.FormFiles)
                {
                    // Random to avoid the same name 

                    Random getrandom = new Random();

                    int random = getrandom.Next(1, 99999);


                    string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", random.ToString() + formFile.FileName);

                    if (formFile.Length > 0)
                    {
                        using (var stream = new FileStream(path, FileMode.Create))
                        {
                            formFile.CopyTo(stream);

                        }
                    }
                    // create new image product
                    var ProductImage = new ProductImages
                    {
                        // ProductID = productId,

                        PathName = Path.Combine("/images/" + random.ToString() + formFile.FileName),

                        Index = 3,




                        //IsDefault = product.FormFiles.IndexOf(formFile) == 0 ? true : false,

                        CaptionImage = "The image illustrates the product " + product.ProductName,

                    };
                    if (product.FormFiles.IndexOf(formFile) == 0)
                    {
                        stringF = ProductImage.PathName;
                        ProductImage.Index = 1;
                    }
                    else if (product.FormFiles.IndexOf(formFile) == 1)
                    {
                        stringB = ProductImage.PathName;
                        ProductImage.Index = 2;
                    }
                    // add image product

                    _context.ProductImages.Add(ProductImage);
                    var productEdit = await _context.Products.Where(p => p.Id == newProduct.Id).FirstOrDefaultAsync();
                    productEdit.FrontImagePath = stringF;
                    productEdit.BackImagePath = stringB;
                    _context.Products.Update(productEdit);

                    // save 

                    await _context.SaveChangesAsync();

                }
                return true;

            }
            catch (Exception)
            {
                return false;
            }

        }

        // this method get product list for user with product availability: status is true and stock > 0

        public async Task<PagedList<ProductListVM>> getListProductAsync(PagedRepository pagedRepository, SearchFilterSortProduct opt)

        {
            var productQuery = _context
              .Products
              .Include(x => x.Category)
              .AsQueryable();

            productQuery = productQuery.OrderByDescending(x => x.DateUpated);

            if (opt.States[0].Equals(-2))
            {
                if (opt.States[0].Equals(-2) && !opt.Categories[0].Equals(-1))
                {
                    productQuery = productQuery.Where(x => opt.Categories.Contains(x.CategoryId));

                }
                if (opt.States[0].Equals(-2) && opt.Categories[0].Equals(-1))
                {
                    productQuery = productQuery.Where(x =>
                  x.StateProduct == StateProductEnum.Available
                  || x.StateProduct == StateProductEnum.NotAvailable
                  || x.StateProduct == StateProductEnum.CommingSoon);

                }

            }
            else
            {
                if (opt.States[0].Equals(-1) && opt.Categories[0].Equals(-1))
                {
                    productQuery = productQuery.AsQueryable();
                }
                else if (opt.States[0].Equals(-1) && !opt.Categories[0].Equals(-1))
                {
                    productQuery = productQuery.Where(x => opt.Categories.Contains(x.CategoryId));
                }
                else if (opt.Categories[0].Equals(-1) && !opt.States[0].Equals(-1))
                {
                    productQuery = productQuery.Where(x => opt.States.Contains((int)x.StateProduct));
                }
                else
                {
                    productQuery = productQuery.Where(x =>
                    opt.Categories.Contains(x.CategoryId)
                    && opt.States.Contains((int)x.StateProduct));
                }
            }

            if (!String.IsNullOrEmpty(opt.Keyword))
            {
                productQuery = productQuery.Where(x => x.ProductName.Contains(opt.Keyword));
            }


            if (!String.IsNullOrEmpty(opt.Column))
            {
                switch (opt.Column)
                {
                    case "descPrice":
                        productQuery = productQuery.OrderByDescending(x => x.UnitPrice);
                        break;
                    case "ascPrice":
                        productQuery = productQuery.OrderBy(x => x.UnitPrice);
                        break;
                    case "oldest":
                        productQuery = productQuery.OrderBy(x => x.DateUpated);
                        break;
                    case "newest":
                        productQuery = productQuery.OrderByDescending(x => x.DateUpated);
                        break;
                    case "descName":
                        productQuery =  productQuery.OrderByDescending(x => x.ProductName);
                        break;
                    case "ascName":
                        productQuery =  productQuery.OrderBy(x => x.ProductName);
                        break;
                }
            }
            //var result = productQuery.Select(x => new AssetInfoDto
            //{
            //    AssetCode = x.Id,
            //    AssetName = x.AssetName,
            //    CategoryName = x.Category.CategoryName,
            //    StateName = ((StateAssetEnum)x.StateAsset).AsString(EnumFormat.Description),
            //    StateId = ((int)x.StateAsset),
            //    Location = x.Location,
            //});
            var productList = productQuery.Include(p => p.ProductImages).Where(p => p.Status == true)
            //&& p.Stock > 0)

            .Select(x => new ProductListVM
            {
                ProductId = x.Id,

                ProductName = x.ProductName,

                UnitPrice = x.UnitPrice,

                IsNew = x.IsNew,

                CategoryId = x.CategoryId,

                CategoryName = x.Category.CategoryName,

                BackImagePath = _config["Host"] + x.BackImagePath,

                FrontImagePath = _config["Host"] + x.FrontImagePath,

                Status = x.Status,

            }).AsQueryable();

            return PagedList<ProductListVM>
              .ToPagedList(productList,
              pagedRepository.PageNumber,
              pagedRepository.PageSize);
        }

        // this method get product list for admin

        public async Task<List<ProductListVM>> getListProductbyAdminAsync()
        {
            var productList = await _context.Products.Include(p => p.ProductImages)
            .Select(x => new ProductListVM
            {
                ProductId = x.Id,

                ProductName = x.ProductName,

                UnitPrice = x.UnitPrice,

                IsNew = x.IsNew,

                CategoryId = x.CategoryId,

                CategoryName = x.Category.CategoryName,

                //Stock = x.Stock,

                Status = x.Status,



                //ImgDefault = x.ProductImages.Where(img => img.IsDefault == true).Select(img => _config["Host"] + img.PathName).FirstOrDefault(),

            }).ToListAsync();

            return productList;
        }

        // this method get product list by category Id
        public async Task<List<ProductListVM>> getListProductbyCategoryID(int id)
        {
            var productList = await _context.Products.Include(p => p.ProductImages).Select(x => new ProductListVM
            {
                CategoryId = x.CategoryId,

                ProductId = x.Id,

                ProductName = x.ProductName,

                UnitPrice = x.UnitPrice,

                IsNew = x.IsNew,

                //ImgDefault = x.ProductImages.Where(img => img.IsDefault == true).Select(img => _config["Host"] + img.PathName).FirstOrDefault()

            }).Where(p => p.CategoryId == id).ToListAsync();

            return productList;
        }

        // this method get product by product Id ,images list and  list rating of product 

        public async Task<ProductDetailsVM> getProductAsync(int id)
        {
            var product = _context.Products.Include(p => p.ProductImages).Include(p => p.Category).Select(p => new ProductDetailsVM()
            {
                Id = p.Id,

                ProductName = p.ProductName,

                CategoryName = p.Category.CategoryName,

                IsSale = p.IsSale,

                CategoryId = p.CategoryId,

                UnitPrice = p.UnitPrice,

                Description = p.Description,

                DateCreated = p.DateCreated,

                IsNew = p.IsNew,

                Status = p.Status,

                BackImagePath = _config["Host"] + p.BackImagePath,

                FrontImagePath = _config["Host"] + p.FrontImagePath,

                PathName = p.ProductImages.Where(p => p.Index == 3).Select(img => _config["Host"] + @img.PathName).ToList(),

                Alt = p.ProductImages.Select(img => img.CaptionImage).ToList(),



            }).Where(p => p.Id == id).FirstOrDefault();

            if (product == null)
            {
                return null;
            }

            return product;

        }
        // This method is update some property of product and update all image list if at least 1 image is changed ;

        public async Task<bool> updateProduct(int id, [FromForm] ProductRequest product)
        {
            var productEdit = await _context.Products.Include(img => img.ProductImages).Where(p => p.Id == id).FirstOrDefaultAsync();

            if (productEdit == null)
            {
                return false;
            }
            else
            {
                productEdit.ProductName = product.ProductName;

                productEdit.CategoryId = product.CategoryId;

                productEdit.Description = product.Description;

                productEdit.UnitPrice = product.UnitPrice;


                productEdit.IsNew = product.IsNew;

                productEdit.Status = product.Status;

                product.DateUpdated = Convert.ToDateTime(DateTime.Now.ToString());

                await _context.SaveChangesAsync();

                // if no change images list return state update success

                if (product.FormFiles == null)
                {
                    return true;
                }
                else
                {
                    // else : remove all old images list

                    try
                    {
                        var productImagesEdit = productEdit.ProductImages.ToList();

                        if (productImagesEdit != null)
                        {
                            for (int i = 0; i < productImagesEdit.Count; i++)
                            {
                                if (DeleteFile(productImagesEdit[i].PathName) == true)
                                {
                                    var img = await _context.ProductImages.FindAsync(productImagesEdit[i].Id);

                                    if (img == null)
                                    {
                                        return false;
                                    }

                                    _context.ProductImages.Remove(img);

                                    await _context.SaveChangesAsync();
                                }
                            }

                        }
                        // and add new images list 

                        foreach (var formFile in product.FormFiles)
                        {
                            Random getrandom = new Random();

                            int random = getrandom.Next(1, 99999);

                            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", random.ToString() + formFile.FileName);

                            if (formFile.Length > 0)
                            {
                                using (var stream = new FileStream(path, FileMode.Create))
                                {
                                    formFile.CopyTo(stream);

                                }
                            }
                            var ProductImage = new ProductImages
                            {
                                //ProductId = id,

                                PathName = Path.Combine("/images/" + random.ToString() + formFile.FileName),

                                //IsDefault = product.FormFiles.IndexOf(formFile) == 0 ? true : false,
                                CaptionImage = "The image illustrates the product" + product.ProductName,

                            };
                            // add 
                            _context.ProductImages.Add(ProductImage);
                            // save
                            await _context.SaveChangesAsync();
                        }
                        return true;
                    }
                    catch (Exception)
                    {
                        return false;
                    }
                }

            }
        }

        // This method will delete file image in root image

        public bool DeleteFile(string file)
        {

            string webRootPath = _hostingEnv.WebRootPath;

            var fullPath = Path.Combine(webRootPath + file);


            if (System.IO.File.Exists(fullPath))
            {
                System.IO.File.Delete(fullPath);
            }

            return true;
        }

        // this medthod search product by name with name product has containt the keyword
        public async Task<List<Product>> searchByName(string keyword)
        {
            var product = await _context.Products.Include(p => p.ProductImages).Where(p => p.ProductName.Contains(keyword)).OrderByDescending(p => p.ProductName).ToListAsync();

            return product;
        }

        // this method return list product need evaluated with coditions: customer was recevied the order 

        //public async Task<List<ProductListVM>> getListProductNeedRating()
        //{
        //    // a query get list product when the order have status was recevied (include a result query productberated under)

        //    string userID = _repoUser.getUserID();

        //    var query = await (from od in _context.OrderDetails

        //                       join o in _context.Order on od.OrderId equals o.Id

        //                       join p in _context.Products on od.ProductId equals p.Id

        //                       join pm in _context.ProductImages on p.Id equals pm.ProductID

        //                       // status is 2 is means customer was recevied the order

        //                       where (o.Status == 2 && pm.IsDefault == true && o.UserId.Equals(userID))

        //                       select new ProductListVM
        //                       {
        //                           ProductId = p.Id,

        //                           ProductName = p.ProductName,

        //                           ImgDefault = _config["Host"] + pm.PathName,

        //                       }).ToListAsync();


        //    // query  get list product be rated by cusomter before

        //    var productberated = await (
        //                 from p in _context.Products

        //                 join pm in _context.ProductImages on p.Id equals pm.ProductID

        //                 join pr in _context.RattingProduct on p.Id equals pr.ProductId

        //                 where (pm.IsDefault == true && pr.UserId.Equals(userID))

        //                 select new ProductListVM
        //                 {

        //                     ProductId = p.Id,

        //                     ProductName = p.ProductName,

        //                     ImgDefault = _config["Host"] + pm.PathName,

        //                 }).ToListAsync();

        //    // and list product has not been evaluated

        //    var NotInRecord = query.Where(p => !productberated.Any(p2 => p2.ProductId == p.ProductId)).ToList();

        //    return NotInRecord;
        //}

        // this medthod evaluated for product 

        //public async Task<bool> ratingProduct(RatingProductRequest request)
        //{
        //    // create new ratings

        //    Random getrandom = new Random();

        //    int random = getrandom.Next(1, 999);

        //    var rating = new RattingProduct()
        //    {
        //        Id = random,

        //        UserId = _repoUser.getUserID(),

        //        ProductId = request.ProductId,

        //        NumberRating = request.NumberRating,

        //        Date = Convert.ToDateTime(DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm:ss")),

        //    };
        //    // add

        //    _context.RattingProduct.Add(rating);
        //    // save

        //    _context.SaveChanges();

        //    // after save then update ratings for this product     

        //    var product = _context.Products.Where(p => p.Id == request.ProductId).FirstOrDefault();

        //    product.Rating = avgRatings(request.ProductId);

        //    _context.SaveChanges();

        //    return true;

        //}




    }

}
