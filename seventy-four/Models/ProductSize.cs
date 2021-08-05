using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RookieOnlineAssetManagement.Models
{
    public class ProductSize
    {
        public int SizeId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public Size Size { get; set; }
    }
}
