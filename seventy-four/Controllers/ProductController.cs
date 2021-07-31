using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Shared.ViewModel;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Models;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RookieShop.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]


    public class ProductController : ControllerBase
    {
        private readonly IProductServices _repo;

        public ProductController(IProductServices repo)
        {

            _repo = repo;

        }
        // GET: api/<Product>
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> GetAsync([FromQuery] PagedRepository pagedRepository, SearchFilterSortProduct opt)
        {
            var list = await _repo.getListProductAsync( pagedRepository,  opt);
            Pagination(list);
            return Ok(list);

        }
        [HttpGet("ListProduct")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> GetListProductByAdmin()
        {
            var list = await _repo.getListProductbyAdminAsync();

            return Ok(list);
        }

        // GET api/<Product>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductDetailsVM>> Get(int id)
        {
            try
            {
                var list = await _repo.getProductAsync(id);

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

        [HttpPost("addProduct")]
        [AllowAnonymous]
        public async Task<IActionResult> addProduct([FromForm] ProductRequest product)
        {
            try
            {
                var result = await _repo.addProduct(product);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        // PUT api/<Product>/5
        [HttpPut]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> Put([FromForm] ProductRequest product)
        {
            try
            {
                var id = product.ProductId;

                var result = await _repo.updateProduct(id, product);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        [HttpPost("search")]
        [AllowAnonymous]
        public async Task<ActionResult<Product>> search(string keyword)
        {
            var list = await _repo.searchByName(keyword);

            return Ok(list);

        }
        [HttpGet("/getID/{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductListVM>> getProductsbyCategoryId(int id)
        {
            var productlist = await _repo.getListProductbyCategoryID(id);

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
