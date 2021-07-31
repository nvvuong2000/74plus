
using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services.Interface
{
    public interface IOrder
    {
        public Task<List<OrderVm>> myOrderList();

        public Task<List<OrderVm>> getAllOrder();

        public Task<OrderVm> getorDetailsbyOrderId(int id);


        public Task<List<OrderVm>> getOrderListofCus(string id);

        public bool updateSttOrdrerCs(int id);

        public bool updateSttOrdrerAd(StatusOrderRequest statusRequest);
    }
}
