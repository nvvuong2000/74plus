using System.ComponentModel;

namespace RookieOnlineAssetManagement.Models
{
    public enum StateProductEnum
    {
        [Description("Available")]
        Available = 0,
        [Description("Not Available")]
        NotAvailable = 1,
        [Description("Comming Soon")]
        CommingSoon = 2,
       
    }
}
