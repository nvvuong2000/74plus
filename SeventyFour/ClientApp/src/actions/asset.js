import api from "../api/api";
import * as assetManage from "../contains/ManageProduct";

export const addAsset = (asset) => async (dispatch) => {
  try {
    const data = await api.Product.addAsset(asset);
    dispatch({
      type: assetManage.ADD_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAssetStateList = () => async (dispatch) => {
  try {
    const data = await api.Product.getStateAssetList();
    dispatch({
      type: assetManage.PRODUCT_STATE_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAssetHistory = (id) => async (dispatch) => {
  try {
    const data = await api.Product.getAssetHistory(id);
    dispatch({
      type: assetManage.PRODUCT_HISTORY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filter = (asset, page) => async (dispatch) => {
  try {
    console.log(page)
    const data = await api.Product.getAssetFilter(asset, page);
    console.log(data);
    dispatch({
      type: assetManage.PRODUCT_FILTER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAssetById= (id) => async (dispatch) => {
  try {
    const data = await api.Product.getAssetById(id);
    console.log(data);
    dispatch({
      type: assetManage.PRODUCT_SELECTED,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAsset = (asset) => async (dispatch) => {
  try {
    const data = await api.Product.updateAsset(asset);
    dispatch({
      type: assetManage.UPDATE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAsset = (id) => async (dispatch) => {
  try {
    const data = await api.Product.deleteAsset(id);
    dispatch({
      type: assetManage.DELETE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMessage = () => async (dispatch) => {
  try {
    dispatch({
      type: assetManage.MESSGAE_DELETE_PRODUCT,
      payload: "",
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkDeteleAsset = (id) => async (dispatch) => {
  try {
    const data = await api.Product.getAssetHistory(id);
    dispatch({
      type: assetManage.CHECK_DELETE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getListReport = (filter,page) => async (dispatch) => {
  try {
    const data = await api.Product.getListReport(filter, page);
    dispatch({
      type: assetManage.REPORT_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};