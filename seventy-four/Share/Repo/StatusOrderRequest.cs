using System;
using System.Collections.Generic;
using System.Text;

namespace RookieOnlineAssetManagement.Share.Repo
{
    public class StatusOrderRequest
    {
        public Guid OrderId { get; set; }
        public int StatusId { get; set; }
    }
}
