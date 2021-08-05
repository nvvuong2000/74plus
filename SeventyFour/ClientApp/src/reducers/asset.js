import * as assetManage from "../contains/ManageProduct";
import { Link } from "react-router-dom";

const initialState = {
  addAsset: {},
  assetList: [],
  assetSelected:{},
  assetStateList: [],
  assetHistory: [],
  messageDeleteAsset: "",
  statusDeleteAsset: null,
  page: [],
  reportList :[],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case assetManage.ADD_PRODUCT: {
      state.addAsset = payload;
      return { ...state };
    }
    case assetManage.PRODUCT_LIST: {
      state.assetList = payload.data;
      let headers = JSON.parse(payload.headers.pagination);
      let list = [];
      for (let i = 1; i <= headers.TotalPages; i++) {
        list.push(i);
      }
      state.page = list;
      return { ...state };
    }
    case assetManage.PRODUCT_STATE_LIST: {
      state.assetStateList = payload;
      return { ...state };
    }
    case assetManage.PRODUCT_HISTORY: {
      state.assetHistory = payload;
      return { ...state };
    }
    case assetManage.PRODUCT_SELECTED: {
      state.assetSelected = payload;
      return { ...state };
    }
    case assetManage.UPDATE_PRODUCT: {
      return { ...state };
    }
    case assetManage.MESSGAE_DELETE_PRODUCT: {
      state.messageDeleteAsset = "";
      state.statusDeleteAsset = null;
      return { ...state };
    }
    case assetManage.CHECK_DELETE_PRODUCT: {
      if (payload.assetHistories.length === 0 ){
        state.messageDeleteAsset = "Do you want to delete this asset ?";
        state.statusDeleteAsset = true;
      } else {
        state.messageDeleteAsset = (
          <p>
            Cannot delete the asset because it belongs to one or more historical
            assignments. If the asset is not able to be used anymore, please
            update its state in
            <Link to={`/asset/edit/${payload.assetCode}`}>
              {" "}
              Edit Asset page
            </Link>
          </p>
        );
        state.statusDeleteAsset = false;
      }
      return { ...state };
    }
    case assetManage.DELETE_PRODUCT: {
      state.assetList = [...state.assetList].filter(
        (x) => x.assetCode != payload
      );

      return { ...state };
    }
    case assetManage.PRODUCT_FILTER: {
      state.assetList = payload.data;
      let headers = JSON.parse(payload.headers.pagination);
      let list = [];
      for (let i = 1; i <= headers.TotalPages; i++) {
        list.push(i);
      }
      state.page = list;
      return { ...state };
      }

    case assetManage.REPORT_LIST: {
      state.reportList = payload.data;   
      let headers = JSON.parse(payload.headers.pagination);
      let list = [];
      for (let i = 1; i <= headers.TotalPages; i++) {
        list.push(i);
      }
      state.page = list;
      return { ...state };
    }
    default:
      return state;
  }
};
