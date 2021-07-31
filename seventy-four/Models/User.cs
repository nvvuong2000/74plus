
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace RookieOnlineAssetManagement.Models
{
    public class User : IdentityUser
    { 
        public string CustomerName { get; set; }
     
        public string Address { get; set; }
      
    }
}
