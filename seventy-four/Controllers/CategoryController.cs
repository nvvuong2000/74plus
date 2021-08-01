using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share.Repo;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]

    public class CategoryController : Controller
    {
        private readonly ICategoryServices _categoryServices;

        public CategoryController(ICategoryServices categoryServices)
        {
            _categoryServices = categoryServices;
        }

        [HttpPost]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<CategoryRequest>> Create(CategoryRequest category)
        {
            Category newItem = new Category()
            {
                CategoryName = category.CategoryName,

                CategoryDescription = category.CategoryDescription,
            };

            var result = await _categoryServices.addCategory(newItem);

            return Ok(result);
        }

        // POST: CategoryController/Create
        [HttpPut]
        [Authorize(Roles = "admin")]

        public async Task<ActionResult<Category>> Edit(Category category)
        {
            var result = await _categoryServices.updateCategory(category);

            return Ok(result);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {

            var result = await _categoryServices.GetCategoryList();

            return Ok(result);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetbyID(int id)
        {
            var category = await _categoryServices.getCategorybyID(id);

            if (category == null)
            {
                return NoContent();
            }

            return Ok(category);
        }
    }
}
