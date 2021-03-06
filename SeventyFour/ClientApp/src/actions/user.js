import api from "../api/api";
import * as userManage from "../contains/ManageUser";

export const get_user_list = (user, page) => async (dispatch) => {
  try {
    const data = await api.User.getAllUsers(user, page);
    dispatch({
      type: userManage.USER_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const get_user_byId = (id) => async (dispatch) => {
  try {
    const data = await api.User.getUserById(id);
    dispatch({
      type: userManage.USER_SELECTED,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const add_user = (user) => async (dispatch) => {
  try {
    const data = await api.User.addUser(user);
    dispatch({
      type: userManage.ADD_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const update_user = (id, dataInput) => async (dispatch) => {
  try {
    const data = await api.User.updateUser(id, dataInput);
    dispatch({
      type: userManage.UPDATE_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const disable_user = (id) => async (dispatch) => {
  try {
    const data=await api.User.disableUser(id);
    dispatch({
      type: userManage.DISABLE_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const get_user_login = () => async (dispatch) => {
  try {
    const data = await api.User.getUserLogin();
    dispatch({
      type: userManage.GET_USER_LOGIN,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changePasswordUser = (value) => async (dispatch) => {
  try {
    const data = await api.User.changePassword(value);
    dispatch({
      type: userManage.CHANGE_PASSWORD,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateSttChangePw = () => async (dispatch) => {
  try {
    
    dispatch({
      type: userManage.UPDATE_STT_CHANGE_PASSWORD,
      payload: "",
    });
  } catch (error) {
    console.log(error);
  }
};