import * as userManage from "../contains/ManageUser";

const initialState = {
  userList: [],
  userSelected: {},
  userLogin: {},
  userPage: [],
  statusChangePw: null,
  messgaeChangePw: "",
  maxPage:0,
  cantDisable:""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userManage.USER_LIST: {
      state.userList = payload.data;
      let headers = JSON.parse(payload.headers.pagination);
      let list = [];
      for (let i = 1; i <= headers.TotalPages; i++) {
        list.push(i);
      }
      state.maxPage = headers.TotalPages;
      state.userPage = list;
      return { ...state };
    }
    case userManage.USER_SELECTED: {
      state.userSelected = payload;
      return { ...state };
    }
    case userManage.ADD_USER: {
      state.userList = [...state.userList, payload];
      return { ...state };
    }
    case userManage.UPDATE_USER: {
      state.userList = [...state.userList, payload];
      return { ...state };
    }
    case userManage.DISABLE_USER: {
      if(payload=="Can't disable this user because this user have assignment")
      {
        state.cantDisable=payload
      }
      else{
        state.cantDisable=""
        state.userList = state.userList.filter((x) => x.id != payload);
      }
      return { ...state };
    }
    case userManage.GET_USER_LOGIN: {
      state.userLogin = payload;
      return { ...state };
    }
    case userManage.CHANGE_PASSWORD: {
      state.statusChangePw = payload;
      if (payload === true) {
        state.messgaeChangePw = "Your password has been changed successfully!";
      }
      else {
        state.messgaeChangePw = "Password is incorrect";
      }
      return { ...state };
    }
    case userManage.UPDATE_STT_CHANGE_PASSWORD: {
      state.messgaeChangePw = "";
      state.statusChangePw =  null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
