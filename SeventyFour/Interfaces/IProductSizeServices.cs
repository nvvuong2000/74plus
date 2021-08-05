using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share.Repo;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface IProductSizeServices
    {
        Task<bool> CreateAsync(CreateProductSizeViewModel productSize);
    }
}
