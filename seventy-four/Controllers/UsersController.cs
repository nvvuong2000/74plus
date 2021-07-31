using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RookieOnlineAssetManagement.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RookieOnlineAssetManagement.Services.Interface;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using RookieOnlineAssetManagement.Models;
using System;
using EnumsNET;
using RookieOnlineAssetManagement.Shared.ViewModel;

namespace RookieOnlineAssetManagement.Controllers
{
    [Authorize]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserDF _repo;
        public UsersController(IUserDF repo)
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
