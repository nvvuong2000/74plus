using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Linq;

namespace RookieOnlineAssetManagement.Services
{

    public class CategoryServices : ICategoryServices
    {
        private readonly ApplicationDbContext _context;

        public CategoryServices(ApplicationDbContext context)
        {
            _context = context;
        }


        public async Task<Category> updateCategory(Category category)
        {
            var id = category.Id;

            var result = await _context.Categories.FindAsync(id);

            if (result == null)
            {
                return null;
            }

            result.CategoryName = category.CategoryName;

            result.CategoryDescription = category.CategoryDescription;

            _context.Categories.Update(result);

            await _context.SaveChangesAsync();

            return category;

        }

        public async Task<Category> addCategory(Category category)
        {
            _context.Categories.Add(category);

            await _context.SaveChangesAsync();

            return category;
        }

        public async Task<List<CategoryViewModel>> GetCategoryList()
        {
            var categoriesList = await _context.Categories.Select(c => new CategoryViewModel 
            { 
                Id = c.Id, 
                CategoryName = c.CategoryName, 
                CategoryDescription = c.CategoryDescription 
            }).ToListAsync();

            return categoriesList;
        }

        public async Task<CategoryViewModel> getCategorybyID(int id)
        {
            var category = await _context.Categories.Select(c => new CategoryViewModel
            {
                Id = c.Id,
                CategoryName = c.CategoryName,
                CategoryDescription = c.CategoryDescription
            }).FirstOrDefaultAsync(ca => ca.Id == id);

            return category;
        }


    }
}
