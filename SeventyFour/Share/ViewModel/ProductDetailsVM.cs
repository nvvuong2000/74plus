using RookieOnlineAssetManagement.Models;
using System;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Shared.ViewModel
{
    public class ProductDetailsVM
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string ProductName { get; set; }
       
        public decimal UnitPrice { get; set; }
        public string Description { get; set; }
        public string CategoryName { get; set; }
        public DateTime DateCreated { get; set; }
        public bool IsNew { get; set; }
        public string FrontImagePath { get; set; }
        public string BackImagePath { get; set; }
        public bool IsSale { get; set; }
        public int PercentSale { get; set; }
        public bool Status { get; set; }
        public List<string> Alt { get; set; }
        public List<string> PathName { get; set; }
        public List<Size> ProductsSize { get; set; }

    }
}
