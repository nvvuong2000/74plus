using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Shared.ViewModel;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Models;
using Newtonsoft.Json;

namespace RookieShop.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]
    public class ProductController : ControllerBase
    {
        private readonly IProductServices _productServices;

        private readonly IProductSizeServices _productSizeServices;

        public ProductController(IProductServices productServices, IProductSizeServices productSizeServices)
        {
            _productServices = productServices;

            _productSizeServices = productSizeServices;
        }

        [HttpPost("create-product")]
        //[Authorize(Roles = "admin")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateProduct([FromForm] CreateProductViewModel product)
        {
            var result = await _productServices.CreateProduct(product);

            return Ok(result);
        }

        [HttpPost("create-product-size")]
        //[Authorize(Roles = "admin")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateProductSize(CreateProductSizeViewModel productSize)
        {
            var result = await _productSizeServices.CreateAsync(productSize);

            if (result)
            {
                return Ok();
            }

            return NoContent();
        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> GetAsync([FromQuery] PagedRepository pagedRepository, SearchFilterSortProduct opt)
        {
            var list = await _productServices.getListProductAsync(pagedRepository, opt);
            Pagination(list);
            return Ok(list);

        }

        [HttpGet("ListProduct")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> GetListProductByAdmin()
        {
            var list = await _productServices.getListProductbyAdminAsync();

            return Ok(list);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductDetailsVM>> Get(int id)
        {
            try
            {
                var list = await _productServices.getProductAsync(id);

                if (list == null)
                {
                    return Ok(null);
                }

                return Ok(list);



            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        //[HttpPut]
        //[Authorize(Roles = "admin")]
        //public async Task<IActionResult> Put([FromForm] ProductRequest product)
        //{
        //    //try
        //    //{
        //    //    var result = await _productServices.updateProduct(id, product);

        //    //    return Ok(result);
        //    //}
        //    //catch (Exception ex)
        //    //{
        //    //    return null;
        //    //}

        //    return NoContent();

        //}

        [HttpPost("search")]
        [AllowAnonymous]
        public async Task<ActionResult<Product>> search(string keyword)
        {
            var list = await _productServices.searchByName(keyword);

            return Ok(list);

        }

        [HttpGet("/getID/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> getProductsbyCategoryId(int id)
        {
            var productlist = await _productServices.getListProductbyCategoryID(id);

            return Ok(productlist);

        }

        [HttpGet("PaginationReport")]
        public void Pagination(PagedList<ProductListVM> result)
        {
            var metadata = new
            {
                result.TotalCount,
                result.PageSize,
                result.CurrentPage,
                result.TotalPages,
                result.HasNext,
                result.HasPrevious,
            };
            Response.Headers.Add("Pagination", JsonConvert.SerializeObject(metadata));
        }
    }
}
