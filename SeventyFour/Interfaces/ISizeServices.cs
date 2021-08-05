using RookieOnlineAssetManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface ISizeServices
    {
        Task<IEnumerable<Size>> GetListSize();
    }
}
