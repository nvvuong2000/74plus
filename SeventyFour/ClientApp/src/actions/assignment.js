import api from "../api/api";
import * as assignmentManage from "../contains/ManageAssignment";

export const getAssignmentUser = (sortColumn) => async (dispatch) => {
  try {
    const data = await api.Assignment.getAssignmentsUser(sortColumn);
    dispatch({
      type: assignmentManage.ASSIGNMENT_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addAssignment = (assignemnt) => async (dispatch) => {
  try {
    const data = await api.Assignment.createAssignment(assignemnt);
    dispatch({
      type: assignmentManage.ASSIGNMENT_CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAssignmentDetail = (id) => async (dispatch) => {
  try {
    const data = await api.Assignment.getAssignmentDetail(id);
    dispatch({
      type: assignmentManage.ASSIGNMENT_DETAIL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAssignmentList = (info, page) => async (dispatch) => {
  try {
    const data = await api.Assignment.getAssignmentList(info, page);
    dispatch({
      type: assignmentManage.ASSIGNMENT_LIST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssignment = (id) => async (dispatch) => {
  try {
    const data = await api.Assignment.deleteAssignment(id);
    dispatch({
      type: assignmentManage.DELETE_ASSIGNMENT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAssignment = (updateAssignmentDto) => async (dispatch) => {
    try {
        console.log("In action");
        const data = await api.Assignment.updateAssignment(updateAssignmentDto);
        dispatch({
            type: assignmentManage.ASSIGNMENT_UPDATE,
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const selectAssignment = (Assignment) => async (dispatch) => {
    try {
        dispatch({
            type: assignmentManage.ASSIGNMENT_SELECTED,
            payload: Assignment,
        });
    } catch (error) {
        console.log(error);
    }
};
export const acceptAssignment = (assignmentId) => async (dispatch) => {
  try {
    const data = await api.Assignment.acceptAssignment(assignmentId);
    dispatch({
      type: assignmentManage.ASSIGNMENT_CREATE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const requestForReturn = (assignmentId) => async (dispatch) => {
  try {
    const data = await api.Assignment.requestForReturn(assignmentId);
    dispatch({
      type: assignmentManage.ASSIGNMENT_CREATE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
