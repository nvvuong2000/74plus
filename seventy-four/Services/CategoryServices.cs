﻿using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

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

            _context.SaveChangesAsync();

            return category;

        }

        public async Task<Category> addCategory(Category category)
        {


            _context.Categories.Add(category);

            _context.SaveChangesAsync();

            return category;


        }

        public async Task<List<Category>> GetCategoryList()
        {
            var categoriesList = await _context.Categories.ToListAsync();

            return categoriesList;
        }

        public async Task<Category> getCategorybyID(int id)
        {
            var categories = await _context.Categories.FirstOrDefaultAsync(ca => ca.Id == id);

            return categories;
        }


    }
}