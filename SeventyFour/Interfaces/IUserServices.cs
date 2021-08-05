using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
   public interface IUserServices
    {
        public string getUserID();
        
        public Task<UserInfo> getInfoUser();
        
        public Task<List<UserListInfo>> getListUser();
    }
}
