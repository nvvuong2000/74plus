using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Shared.ViewModel;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Share;

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
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> CreateProduct([FromForm] CreateProductViewModel product)
        {
            var result = await _productServices.CreateProductAsync(product);

            return Ok(result);
        }

        [HttpPost("create-product-size")]
        [Authorize(Roles = "admin")]
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
        public async Task<IActionResult> GetAsync([FromQuery] QueryModel query)
        {
            var products = await _productServices.GetListProductAsync(query);

            return Ok(products);
        }

        [HttpGet("{id}/detail")]
        [AllowAnonymous]
        public async Task<ActionResult<ProductDetailsVM>> Get(int id)
        {
            var list = await _productServices.GetProductByIdAsync(id);

            return Ok(list);
        }

        [HttpGet("{id}/get-by-category")]
        [AllowAnonymous]
        public async Task<IActionResult> GetProductsbyCategoryId(int id, [FromQuery] QueryModel query)
        {
            var products = await _productServices.GetProductByCategoryIdAsync(id, query);

            return Ok(products);
        }

        [HttpPut("{id}/update-product")]
        //[Authorize(Roles = "admin")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateProduct(int id, [FromForm] CreateProductViewModel product)
        {
            var result = await _productServices.UpdateProductAsync(id, product);

            if(result)
            {
                return Ok();
            }

            return NotFound();
        }
    }
}
