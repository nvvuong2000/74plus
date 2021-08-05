﻿using System.ComponentModel.DataAnnotations.Schema;

namespace RookieOnlineAssetManagement.Models
{
    public class OrderDetails
    {
        public int Id { get; set; }
        
        public int OrderId { get; set; }

        public int ProductId { get; set; }
        
        public int Quantity { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitPrice { get; set; }
        
        public Product Product { get; set; }
    }
}
