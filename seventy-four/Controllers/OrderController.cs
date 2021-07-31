using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieShop.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Bearer")]
    public class OrderController : ControllerBase
    {

        private readonly IOrderServices _repo;

        public OrderController(IOrderServices repo)
        {

            _repo = repo;

        }
        [HttpGet]
        [Authorize(Roles = "user")]
        public async Task<ActionResult<IEnumerable<OrderVm>>> GetMyListOrder()
        {

            //var list = await _repo.myOrderList();

            //return list;

            return null;

        }
        
        
        [HttpGet("/getorderlist")]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<IEnumerable<OrderVm>>> GetListOrder()
        {
            var list = await _repo.getAllOrder();

            return list;


        }
      
        
        [HttpGet("{id}")]
        [Authorize(Roles = "user")]
        public async Task<ActionResult<OrderVm>> GetOrderbyID(int id)
        {
            var list = await _repo.getorDetailsbyOrderId(id);

            return Ok(list);
        }
        
        
        [HttpGet("listOrder/{id}")]
        [Authorize(Roles = "user")]
        public async Task<ActionResult<OrderVm>> GetListOrderbyuserID(string id)
        {
            var list = await _repo.getOrderListofCus(id);

            return Ok(list);


        }
        [HttpGet("updateSttOrder/{id}")]
        [Authorize(Roles = "user")]
        public bool UpdateSttOdCs(int id)
        {

            var result = _repo.updateSttOrdrerCs(id);

            return result;
        }
       
        
        [HttpPost("updateSttOrderad")]
        [Authorize(Roles = "admin")]
        public bool UpdateSttOdAd(StatusOrderRequest statusRequest)
        {
            var result = _repo.updateSttOrdrerAd(statusRequest);

            return result;
        }
    }
}
