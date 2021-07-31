
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public StateOrderEnum StateOrder { get; set; }
        public DateTime DateOrdered { get; set; }
        public decimal Total { get; set; }
        public User User { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
