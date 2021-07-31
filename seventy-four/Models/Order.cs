using RookieOnlineAssetManagement.Common.Enums;
using System;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Models
{
    public class Order
    {
        public int Id { get; set; }

        public string CustomerName { get; set; }

        public string CustomerAddress { get; set; }

        public StateOrderEnum StateOrder { get; set; }

        public DateTime DateOrdered { get; set; }

        public decimal Total { get; set; }

        public virtual ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
