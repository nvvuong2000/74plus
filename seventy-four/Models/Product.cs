
using RookieOnlineAssetManagement.Common.Enums;
using System;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Models
{
    public class Product
    {
        public int Id { get; set; }

        public int ProductSizeId { get; set; }

        public int CategoryId { get; set; }

        public string ProductName { get; set; }

        public string FrontImagePath { get; set; }

        public string BackImagePath { get; set; }

        public decimal UnitPrice { get; set; }
        
        public string Description { get; set; }
        
        public DateTime DateCreated { get; set; }
        
        public DateTime DateUpated { get; set; }

        public string UserIdCreated { get; set; }

        public string UserIdUpdated { get; set; }
        
        public bool IsNew { get; set; }

        public bool IsSale { get; set; }

        public int PercentSale { get; set; }

        public bool Status { get; set; }

        public int Quantity { get; set; }

        public StateProductEnum StateProduct { get; set; }

        public virtual Category Category { get; set; }

        public virtual ICollection<ProductImages> ProductImages {get;set;}

        public virtual ProductSize ProductSize { get; set; }

    }
}
