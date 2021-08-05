using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface IProductServices
    {
        Task<Product> CreateProductAsync(CreateProductViewModel product);

        Task<bool> UpdateProductAsync(int id, [FromForm] CreateProductViewModel product);

        Task<PaginationResultModel> GetListProductAsync(QueryModel query);
        
        Task<ProductDetailsVM> GetProductByIdAsync(int id);

        Task<PaginationResultModel> GetProductByCategoryIdAsync(int id, QueryModel query);
    }
}
