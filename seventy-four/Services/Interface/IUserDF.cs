using RookieOnlineAssetManagement.Shared.ViewModel;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services.Interface
{
   public interface IUserDF
    {
        public string getUserID();
        
        public Task<UserInfo> getInfoUser();
        
        public Task<List<UserListInfo>> getListUser();
    }
}
