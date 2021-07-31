import api from "../api/api";
import * as categoryManage from "../contains/ManageCategory";

export const getCategoryList = () => async (dispatch) => {
  try {
    const data = await api.Category.getAllCategory();
    dispatch({
      type: categoryManage.CATEGORY_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = (category) => async (dispatch) => {
  try {
    var error = await api.Category.addCategory(category);
    const data = await api.Category.getAllCategory();
    const result = { "data": data, "error": error.message }
    dispatch({
      type: categoryManage.ADD_CATEGORY,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const editMess= () => async (dispatch) => {
  try {
    dispatch({
      type: categoryManage.EDIT_MESSAGE,
      payload: "",
    });
  } catch (error) {
    console.log(error);
  }
};