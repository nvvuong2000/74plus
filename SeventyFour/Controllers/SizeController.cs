using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Interfaces;
using System.Threading.Tasks;

namespace RookieShop.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]
    public class SizeController : ControllerBase
    {

        private readonly ISizeServices _sizeServices;

        public SizeController(ISizeServices sizeServices)
        {
            _sizeServices = sizeServices;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            var result = await _sizeServices.GetListSize();

            return Ok(result);
        }
    }
}
