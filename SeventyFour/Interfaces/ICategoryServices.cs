using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface ICategoryServices
    {
        public Task<Category> addCategory(Category category);
       
        public Task<Category> updateCategory(Category category);
        
        public Task<List<CategoryViewModel>> GetCategoryList();
        
        public Task<CategoryViewModel> getCategorybyID(int id);
    }
}
