using Microsoft.AspNetCore.Http;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface IFileServices
    {
        bool UploadFileAsync(string filePath, IFormFile file);

        bool DeleteFileAsync(string fileName);
    }
}
