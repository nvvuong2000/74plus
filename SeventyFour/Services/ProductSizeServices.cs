using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Models;
using RookieOnlineAssetManagement.Share.Repo;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services
{
    public class ProductSizeServices : IProductSizeServices
    {
        private readonly ApplicationDbContext _context;

        public ProductSizeServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> CreateAsync(CreateProductSizeViewModel productSize)
        {
            var isExistProduct = _context.Products.Any(p => p.Id == productSize.ProductId);

            var isExistSize = _context.Sizes.Any(s => s.Id == productSize.SizeId);

            var test = _context.ProductSizes.Where(p => p.SizeId == productSize.SizeId && p.ProductId == productSize.ProductId).FirstOrDefault();

            if(isExistProduct && isExistSize)
            {
                var item = new ProductSize
                {
                    ProductId = productSize.ProductId,
                    SizeId = productSize.SizeId,
                    Quantity = productSize.Quantity
                };

                _context.ProductSizes.Add(item);

                await _context.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
