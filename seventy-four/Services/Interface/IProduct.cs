
using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services.Interface
{
    public interface IProduct
    {
        public Task<bool> addProduct([FromForm] ProductRequest product);

        public Task<bool> updateProduct(int id, [FromForm] ProductRequest product);

        Task<PagedList<ProductListVM>> getListProductAsync(PagedRepository pagedRepository, SearchFilterSortProduct opt);
        
        public Task<ProductDetailsVM> getProductAsync(int id);
        
        public Task<List<ProductListVM>> getListProductbyAdminAsync();
        
        public Task<List<ProductListVM>> getListProductbyCategoryID(int id);
              
        public Task<List<Product>> searchByName(string keyword);
        
       


    }
}
