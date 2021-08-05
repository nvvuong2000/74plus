import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

const User = {
  getAllUsers: async (user, page) =>
    await axios
      .post(`/api/users/getusers?&pageNumber=${page}`, user)
      .then((res) => {
        return res;
      }),
  getUserById: async (id) =>
    await axios.get(`/api/users/${id}`).then((res) => {
      return res.data;
    }),
  addUser: async (user) =>
    await axios.post("/api/users", user).then((res) => {
      return res.data;
    }),
  updateUser: async (id, dataInput) =>
    await axios.put(`/api/users/${id}`, dataInput).then((res) => {
      return res.data;
    }),
  disableUser: async (id) =>
    await axios.put(`/api/users/disable/${id}`).then((res) => {
      return res.data;
    }),
  getUserLogin: async () =>
    await axios.get("/api/users/infouserlogin").then((res) => {
      return res.data;
    }),
  changePassword: async (changePassworData) =>
    await axios
      .put("/api/users/changePassword", changePassworData)
      .then((res) => {
        return res.data;
      }),
};

const Product = {
  addAsset: async (asset) =>
    await axios.post(`/api/Product`, asset).then((res) => {
      return res.data;
    }),
  getStateAssetList: async () =>
    await axios.get(`/api/Product/getState`).then((res) => {
      return res.data;
    }),
  getAssetHistory: async (id) =>
    await axios.get(`/api/Product/history?id=${id}`).then((res) => {
      return res.data;
    }),
  getAssetFilter: async (asset, page) =>
    await axios
      .post(`/api/Product?&PageNumber=${page}`, asset)
      .then((res) => {
        return res;
      }),
  getAssetById: async (id) =>
    await axios.get(`/api/Product/${id}`).then((res) => {
      return res.data;
    }),
  updateAsset: async (asset) =>
    await axios.put(`/api/Product`, asset).then((res) => {
      return res.data;
    }),
  deleteAsset: async (id) =>
    await axios.delete(`/api/Product?id=${id}`).then((res) => {
      if (res.status === 200) {
        return id;
      } else if (res.status === 204) {
        return false;
      }
    }),
  getListReport: async (filter, page) =>
    await axios.post(`/api/Product/getReport?&pageNumber=${page}`, filter)
    .then((res) => {
      return res
    }),
};

const Category = {
  getAllCategory: async () =>
    await axios.get("/categorylist").then((res) => {
      return res.data;
    }),
  addCategory: async (category) =>
    await axios.post("/api/Category", category).then((res) => {
      return res.data;
    }),
};

const Assignment = {
  createAssignment: async (assignment) =>
    await axios.post("/api/assignment", assignment).then((res) => {
      return res.data;
    }),

  getAssignmentsUser: async (sortColumn) =>
    await axios
      .post("/api/Assignment/AssignmentsUser", sortColumn)
      .then((res) => {
        return res.data;
      }),

  getAssignmentDetail: async (id) =>
    await axios.get(`/${id}`).then((res) => {
      return res.data;
    }),

  getAssignmentList: async (data, page) =>
    await axios
      .post(`/api/Assignment/get-all-filter?&pageNumber=${page}`, data)
      .then((res) => {
        return res;
      }),

  deleteAssignment: async (id) =>
    await axios.delete(`/${id}`).then((res) => {
      if (res.status === 200) {
        return id;
      } else if (res.status === 204) {
        return false;
      }
    }),

  updateAssignment: async (updateAssignmentDto) =>
      await axios.put(`/api/Assignment`, updateAssignmentDto).then((res) => {
          console.log("return data");
          console.log(res.data);
        return res.data;
     }),

  acceptAssignment: async (assignmentId) =>
    await axios
      .post(`/api/assignment/accept-assignment/${assignmentId}`)
      .then((res) => {
        return res.data;
      }),

  requestForReturn: async (assignmentId) =>
    await axios
      .post(`/api/assignment/request-return/${assignmentId}`)
      .then((res) => {
        return res.data;
      }),
};

export default { User, Product, Category, Assignment };
