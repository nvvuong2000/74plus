using RookieOnlineAssetManagement.Share.Repo;
using RookieOnlineAssetManagement.Shared.ViewModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Interfaces
{
    public interface IOrderServices
    {
        public Task<List<OrderVm>> myOrderList();

        public Task<List<OrderVm>> getAllOrder();

        public Task<OrderVm> getorDetailsbyOrderId(int id);


        public Task<List<OrderVm>> getOrderListofCus(string id);

        public bool updateSttOrdrerCs(int id);

        public bool updateSttOrdrerAd(StatusOrderRequest statusRequest);
    }
}
