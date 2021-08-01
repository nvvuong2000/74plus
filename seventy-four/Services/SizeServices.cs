using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services
{
    public class SizeServices : ISizeServices
    {
        private readonly ApplicationDbContext _context;

        public SizeServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Size>> GetListSize()
        {
            return await _context.Sizes.ToListAsync();
        }
    }
}
