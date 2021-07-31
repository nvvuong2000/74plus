 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Models
{
    public class ProductsSize
    {
        public int ID { get; set; }

        public int ProductID { get; set; }

        public string SizeName { get; set; }
        public string Quantity { get; set; }

        public Product Product { get; set; }
    }
}
