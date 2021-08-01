namespace RookieOnlineAssetManagement.Models
{
    public class ProductImages
    {
        public int Id { get; set; }

        public int ProductId { get; set; }
        
        public string PathName { get; set; }

        public int Index { get; set; }

        public string CaptionImage { get; set; }
    }
}
