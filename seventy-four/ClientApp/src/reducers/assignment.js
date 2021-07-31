import * as assignmentManage from "../contains/ManageAssignment";

const initialState = {
  assignmentsUser: [],
  assignmentNew:{},
  assignmentDetail: {},
  assignmentSelected: {},
  assignmentUpdated: {},
  listAssignment: [],
  page: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case assignmentManage.ASSIGNMENT_USER: {
      state.assignmentsUser = payload;
      return { ...state };
    }
    case assignmentManage.ASSIGNMENT_DETAIL: {
      state.assignmentDetail = payload;
      return { ...state };
    }
    case assignmentManage.ASSIGNMENT_CREATE: {
      state.assignmentNew =  payload;
      return { ...state };
    }
    case assignmentManage.ASSIGNMENT_LIST: {
      state.listAssignment = payload.data;
      let headers = JSON.parse(payload.headers.pagination);
      let list = [];
      for (let i = 1; i <= headers.TotalPages; i++) {
        list.push(i);
      }
      state.page = list;
      return { ...state };
    }
    case assignmentManage.DELETE_ASSIGNMENT: {
      state.listAssignment = [...state.listAssignment].filter(x => x.id != payload)
      }

    case assignmentManage.ASSIGNMENT_SELECTED: {
       state.assignmentSelected = payload;
       return { ...state };
      }

    case assignmentManage.ASSIGNMENT_UPDATE: {
      state.assignmentUpdated = payload;
      return { ...state };
     }

    default:
      return state;
  }
};