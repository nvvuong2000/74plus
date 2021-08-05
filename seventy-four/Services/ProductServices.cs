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
using RookieOnlineAssetManagement.Share;

namespace RookieOnlineAssetManagement.Services
{
    public class ProductServices : IProductServices
    {
        private readonly ApplicationDbContext _context;

        private readonly IFileServices _fileServices;

        private readonly IConfiguration _config;

        private readonly IUserServices _repoUser;

        private readonly IMapper _mapper;

        private readonly IWebHostEnvironment _hostingEnv;

        public ProductServices(ApplicationDbContext context, IUserServices repoUser, IFileServices fileServices, IWebHostEnvironment hostingEnv, IConfiguration config, IMapper mapper)
        {
            _context = context;

            _hostingEnv = hostingEnv;

            _repoUser = repoUser;

            _config = config;

            _mapper = mapper;

            _fileServices = fileServices;
        }

        public async Task<Product> CreateProductAsync([FromBody] CreateProductViewModel product)
        {
            var newProduct = new Product()
            {
                CategoryId = product.CategoryId,
                ProductName = product.ProductName,
                UnitPrice = product.UnitPrice,
                Description = product.Description,
                Status = product.Status,
                IsNew = product.IsNew,
                IsSale = product.IsSale,
                DateCreated = DateTime.Now,
                DateUpated = DateTime.Now,
                PercentSale = product.PercentSale
            };

            await _context.Products.AddAsync(newProduct);

            await _context.SaveChangesAsync();

            if (product.FrontImage != null)
            {
                var fileName = product.FrontImage.FileName;

                var tempName = Guid.NewGuid().ToString();

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + fileName);

                var result = _fileServices.UploadFileAsync(path, product.FrontImage);

                if (result)
                {
                    var pathSave = Path.Combine("/images/" + tempName + fileName);

                    newProduct.FrontImagePath = pathSave;
                }
            }

            if (product.BackImage != null)
            {
                var fileName = product.BackImage.FileName;

                var tempName = Guid.NewGuid().ToString(); ;

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + fileName);

                var result = _fileServices.UploadFileAsync(path, product.BackImage);

                if (result)
                {
                    var pathSave = Path.Combine("/images/" + tempName + fileName);

                    newProduct.BackImagePath = pathSave;
                }
            }

            foreach (var formFile in product.FormFiles)
            {
                var tempName = Guid.NewGuid().ToString(); ;

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + formFile.FileName);

                if (formFile.Length > 0)
                {
                    var result = _fileServices.UploadFileAsync(path, formFile);

                    if (result)
                    {
                        var pathSave = Path.Combine("/images/" + tempName + formFile.FileName);

                        var productImage = new ProductImages
                        {
                            ProductId = newProduct.Id,
                            PathName = pathSave,
                            Index = product.FormFiles.IndexOf(formFile),
                            CaptionImage = "The image illustrates the product " + product.ProductName
                        };

                        _context.ProductImages.Add(productImage);
                    }
                }
            }

            _context.Products.Update(newProduct);

            await _context.SaveChangesAsync();

            return newProduct;
        }

        public async Task<PaginationResultModel> GetListProductAsync(QueryModel query)
        {
            var productQuery = _context.Products.Where(p => p.Status == true).Include(x => x.Category).Include(p => p.ProductImages).AsQueryable();

            productQuery = productQuery.OrderByDescending(x => x.DateUpated);

            if (!String.IsNullOrEmpty(query.Keyword))
            {
                productQuery = productQuery.Where(x => x.ProductName.Contains(query.Keyword));
            }

            if (!String.IsNullOrEmpty(query.SortBy))
            {
                switch (query.SortBy)
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
                        productQuery = productQuery.OrderByDescending(x => x.ProductName);
                        break;
                    default:
                        productQuery = productQuery.OrderBy(x => x.ProductName);
                        break;
                }
            }

            var productList = productQuery.Select(x => new ProductListVM
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

            });

            return await PaginationResultModel.ToPagedListAsync(productList, query.PageNumber, query.PageSize);
        }

        public async Task<PaginationResultModel> GetProductByCategoryIdAsync(int id, QueryModel query)
        {
            var productList = _context.Products.Include(p => p.ProductImages).Where(p => p.CategoryId == id)
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

            return await PaginationResultModel.ToPagedListAsync(productList, query.PageNumber, query.PageSize);
        }

        public async Task<ProductDetailsVM> GetProductByIdAsync(int id)
        {
            var product = await _context.Products.Include(p => p.ProductImages).Include(p => p.Category).Select(p => new ProductDetailsVM()
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



            }).Where(p => p.Id == id).FirstOrDefaultAsync();

            if (product == null)
            {
                return null;
            }

            return product;

        }
        // This method is update some property of product and update all image list if at least 1 image is changed ;

        public async Task<bool> UpdateProductAsync(int id, [FromForm] CreateProductViewModel product)
        {
            var productEdit = await _context.Products.Include(img => img.ProductImages).Where(p => p.Id == id).FirstOrDefaultAsync();

            if (productEdit == null)
            {
                return false;
            }

            productEdit.ProductName = product.ProductName;

            productEdit.CategoryId = product.CategoryId;

            productEdit.Description = product.Description;

            productEdit.UnitPrice = product.UnitPrice;

            productEdit.IsNew = product.IsNew;

            productEdit.Status = product.Status;

            productEdit.PercentSale = product.PercentSale;

            if (product.FrontImage != null)
            {
                var fileName = product.FrontImage.FileName;

                var tempName = Guid.NewGuid().ToString();

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + fileName);

                var result = _fileServices.UploadFileAsync(path, product.FrontImage);

                if (result)
                {
                    if (!string.IsNullOrEmpty(productEdit.FrontImagePath))
                    {
                        var rootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

                        _fileServices.DeleteFileAsync(rootPath + productEdit.FrontImagePath.Replace("/", "\\"));
                    }

                    var pathSave = Path.Combine("/images/" + tempName + fileName);

                    productEdit.FrontImagePath = pathSave;
                }
            }

            if (product.BackImage != null)
            {
                var fileName = product.BackImage.FileName;

                var tempName = Guid.NewGuid().ToString(); ;

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + fileName);

                var result = _fileServices.UploadFileAsync(path, product.BackImage);

                if (result)
                {
                    if (!string.IsNullOrEmpty(productEdit.BackImagePath))
                    {
                        var rootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

                        _fileServices.DeleteFileAsync(rootPath + productEdit.BackImagePath.Replace("/", "\\"));
                    }

                    var pathSave = Path.Combine("/images/" + tempName + fileName);

                    productEdit.BackImagePath = pathSave;
                }
            }

            if(productEdit.ProductImages.Count != 0)
            {
                foreach(var image in productEdit.ProductImages)
                {
                    var rootPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

                    _fileServices.DeleteFileAsync(rootPath + image.PathName.Replace("/", "\\"));

                    _context.Remove(image);
                }
            }

            foreach (var formFile in product.FormFiles)
            {
                var tempName = Guid.NewGuid().ToString(); ;

                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", tempName + formFile.FileName);

                if (formFile.Length > 0)
                {
                    var result = _fileServices.UploadFileAsync(path, formFile);

                    if (result)
                    {
                        var pathSave = Path.Combine("/images/" + tempName + formFile.FileName);

                        var productImage = new ProductImages
                        {
                            ProductId = productEdit.Id,
                            PathName = pathSave,
                            Index = product.FormFiles.IndexOf(formFile),
                            CaptionImage = "The image illustrates the product " + product.ProductName
                        };

                        _context.ProductImages.Add(productImage);
                    }
                }
            }

            _context.Update(productEdit);

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
