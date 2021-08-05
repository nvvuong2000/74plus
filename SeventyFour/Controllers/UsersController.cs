using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Shared.ViewModel;

namespace RookieOnlineAssetManagement.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserServices _repo;
        public UsersController(IUserServices repo)
        {
            _repo = repo;

        }
        [HttpGet]
        public IActionResult Index()
        {
            string userId = _repo.getUserID();

            return Ok(userId);
        }
        [HttpGet("infoUser")]
        public async Task<IActionResult> infoUser()
        {
            var user = await _repo.getInfoUser();

            return Ok(user);
        }
        [HttpGet("listUser")]
        public async Task<ActionResult<IList<UserListInfo>>> ListinfoUser()
        {
            var user = await _repo.getListUser();

            return Ok(user);
        }
    }
}
