using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface IProductServices
    {
        public Task<Product> CreateProduct(CreateProductViewModel product);

        public Task<bool> updateProduct(int id, [FromForm] CreateProductViewModel product);

        Task<PagedList<ProductListVM>> getListProductAsync(PagedRepository pagedRepository, SearchFilterSortProduct opt);
        
        public Task<ProductDetailsVM> getProductAsync(int id);
        
        public Task<List<ProductListVM>> getListProductbyAdminAsync();
        
        public Task<List<ProductListVM>> getListProductbyCategoryID(int id);
              
        public Task<List<Product>> searchByName(string keyword);
        
       


    }
}
