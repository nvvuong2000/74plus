using Microsoft.AspNetCore.Http;
using RookieOnlineAssetManagement.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace RookieOnlineAssetManagement.Share.Repo
{
    public class ProductRequest
    {
      
        public int CategoryId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal UnitPrice { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public bool IsNew { get; set; }
        public bool IsSale { get; set; }
        public int PercentSale { get; set; }

        public DateTime DateCreated { get; set; }
        
        public DateTime DateUpdated { get; set; } 
        public List<IFormFile> FormFiles { get; set; }
        public List<ProductsSizePrequest> ProductsSize { get; set; }


    }
}
