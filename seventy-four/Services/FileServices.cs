﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using RookieOnlineAssetManagement.Interfaces;
using System.IO;

namespace RookieOnlineAssetManagement.Services
{
    public class FileServices : IFileServices
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        public FileServices(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public bool DeleteFileAsync(string fileName)
        {
            try
            {
                if (File.Exists(fileName))
                {
                    File.Delete(fileName);
                    return true;
                }

            }
            catch { }
            return false;
        }

        public bool UploadFileAsync(string filePath, IFormFile file)
        {
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
                return true;
            }
        }
    }
}
