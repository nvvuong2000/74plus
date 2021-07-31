using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Models
{
    public class OrderDetails
    {
        public Guid Id { get; set; }
        
        public Guid OrderId { get; set; }
        
        public int ProductId { get; set; }
        
        public string ProductName { get; set; }
        
        public int Quantity { get; set; }
        
        public decimal UnitPrice { get; set; }
        
        public Order Order { get; set; }
        
        public Product Product { get; set; }
    }
}
