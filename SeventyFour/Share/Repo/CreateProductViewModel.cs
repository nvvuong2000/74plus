using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Share.Repo
{
    public class CreateProductViewModel
    {
        public int CategoryId { get; set; }

        public string ProductName { get; set; }

        public decimal UnitPrice { get; set; }

        public string Description { get; set; }

        public bool Status { get; set; }

        public bool IsNew { get; set; }

        public bool IsSale { get; set; }

        public int PercentSale { get; set; }

        public List<IFormFile> FormFiles { get; set; }

        public IFormFile FrontImage { get; set; }

        public IFormFile BackImage { get; set; }
    }
}
