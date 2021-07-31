using Microsoft.Extensions.Configuration;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Interfaces;
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services
{
    public class OrderServices : IOrderServices
    {
        private readonly ApplicationDbContext _context;
       
        private readonly IUserServices _repoUser;
        
        private readonly IConfiguration _config;

        public OrderServices(ApplicationDbContext context, IUserServices repoUser, IConfiguration config)
        {
            _context = context;
           
            _repoUser = repoUser;
            
            _config = config;
        }

        // this method for the customer can watch order list 
       
        //public async Task<List<OrderVm>> myOrderList()
        //{
        //    var listOrder = await _context.Order.Include(o => o.OrderDetails).Include(o=>o.OrderDetails).Where(x => x.UserId == _repoUser.getUserID()).Select(x=>new OrderVm {
        //        Id = x.Id,
               
        //        ProductName = x.OrderDetails.Select(o=>o.ProductName).ToList(),
                
        //        Quantity = x.OrderDetails.Select(o => o.Quantity).ToList(),
                
        //        Total = x.Total,
                
        //        Status = x.Status,
                
        //        UnitPrice = x.OrderDetails.Select(o=>o.UnitPrice).ToList(),
                
        //        Date = x.DateOrdered,

        //    }).ToListAsync();
           
        //    return listOrder;
        //}
        // this method for the admin can watch order list and information of customer
        public async Task<List<OrderVm>> getOrderListofCus(string id)
        {
            //var listOrder = await _context.Order.Include(o => o.OrderDetails).Include(o => o.OrderDetails).Include(o => o.User).Where(x => x.UserId.Equals(id)).Select(x => new OrderVm
            //{
            //    Id = x.Id,

            //    ProductName = x.OrderDetails.Select(o => o.ProductName).ToList(),

            //    Quantity = x.OrderDetails.Select(o => o.Quantity).ToList(),

            //    Total = x.Total,

            //    //Status = x.Status,

            //    UnitPrice = x.OrderDetails.Select(o => o.UnitPrice).ToList(),

            //    Date = x.DateOrdered,

            //    UserId = x.UserId,

            //    UserName = x.User.CustomerName,

            //    UserAddress = x.User.Address,

            //    UserTel = x.User.PhoneNumber,

            //}).ToListAsync();

            //return listOrder;

            return null;
        }
        
        // this method get order details of order
        public async Task<OrderVm> getorDetailsbyOrderId(Guid id)
        {
            //var listOrder = await _context.Order.Include(o => o.OrderDetails).Include(o => o.User).Where(x=>x.Id == id).Select(x => new OrderVm
            //{
            //    Id = x.Id,             

            //    ProductID = x.OrderDetails.Select(o=>o.ProductId).ToList(),              

            //    //ImageDefault = x.OrderDetails.Select(o=>o.Product.ProductImages.Where(img=>img.IsDefault==true).Select(img=> _config["Host"]+img.PathName).FirstOrDefault()),

            //    ProductName = x.OrderDetails.Select(o => o.ProductName).ToList(),

            //    Quantity = x.OrderDetails.Select(o => o.Quantity).ToList(),

            //    Total = x.Total,

            //    //Status = x.Status,

            //    UnitPrice = x.OrderDetails.Select(o => o.UnitPrice).ToList(),

            //    Date = x.DateOrdered,

            //    UserId = x.UserId,

            //    UserName = x.User.CustomerName,

            //    UserAddress = x.User.Address,

            //    UserTel = x.User.PhoneNumber,


            //}).FirstOrDefaultAsync();

            //return listOrder;
            return null;
        }

        // this method for the admin update status order of customer

        public bool updateSttOrdrerAd(StatusOrderRequest statusRequest )
        {
            //var order = _context.Order.Where(od => od.Id == statusRequest.OrderId).FirstOrDefault();
           
            //if (order == null)
            //{
            //    return false;
            //}
            ////order.Status = statusRequest.StatusId;

            //_context.Order.Update(order);
            
            //_context.SaveChanges();
            
            return true;
        }


        // this method for the customer update status order and customer can evaluated product after

        public bool updateSttOrdrerCs(Guid Id)
        {
            //var order = _context.Order.Where(od => od.Id == Id).FirstOrDefault();
            
            //if (order == null)
            //{
            //    return false;
            //}
            ////order.Status = 2;
            
            //_context.Order.Update(order);
            
            //_context.SaveChanges();
            
            return true;
        }

        // this method for the admin can watch all order list of all customer 

        public async Task<List<OrderVm>> getAllOrder()
        {
            //var listOrder = await _context.Order.Include(o => o.OrderDetails).Select(x => new OrderVm
            //{

            //    Id = x.Id,

            //    Total = x.Total,

            //    //Status = x.Status,

            //    Date = x.DateOrdered,

            //    UserId = x.UserId,

            //    UserName = x.User.CustomerName,
            //}).ToListAsync();

            //return listOrder;
            return null;
        }

        public Task<OrderVm> getorDetailsbyOrderId(int id)
        {
            throw new NotImplementedException();
        }

        public bool updateSttOrdrerCs(int id)
        {
            throw new NotImplementedException();
        }
    }
}
