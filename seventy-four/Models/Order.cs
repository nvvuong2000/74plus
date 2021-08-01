using RookieOnlineAssetManagement.Common.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RookieOnlineAssetManagement.Models
{
    public class Order
    {
        public int Id { get; set; }

        public string CustomerName { get; set; }

        public string CustomerAddress { get; set; }

        public StateOrderEnum StateOrder { get; set; }

        public DateTime DateOrdered { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Total { get; set; }

        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
