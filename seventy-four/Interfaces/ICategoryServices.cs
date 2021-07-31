using RookieOnlineAssetManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface ICategoryServices
    {
        public Task<Category> addCategory(Category category);
       
        public Task<Category> updateCategory(Category category);
        
        public Task<List<Category>> GetCategoryList();

        
        public Task<Category> getCategorybyID(int id);



    }
}
