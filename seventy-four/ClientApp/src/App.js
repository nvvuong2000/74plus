import { useEffect } from "react";

import history from './history';
// import "bootstrap/dist/css/bootstrap.min.css";

// import HomePage from "./components/home/Index";
import React, { Fragment } from "react";
import { Route, Router, Switch } from "react-router-dom";
// import AssetPage from "./components/assets/Index";
// import CreateAssetPage from "./components/assets/CreateAsset";
// import EditAssetPage from "./components/assets/EditAsset";

// import AssignmentPage from "./components/assignments/Index";
// import CreateAssignmentPage from "./components/assignments/CreateAssignment";
// import EditAssignmentPage from "./components/assignments/EditAssignment";

// import ReportPage from "./components/reports/Index";

// import ReturnRequestPage from "./components/return_request/Index";

// import ManageUsersPage from "./components/users/Index";
// import CreateUserPage from "./components/users/CreateUser";
// import EditUserPage from "./components/users/EditUser";

// import ListProduct from "./components/home/ListProduct";
import Home from "./components/home/Index1"
import { useDispatch, useSelector } from "react-redux";
import * as userManage from "./actions/user";
import axios from "axios";
// import "./App.css";
// import Details from "./components/product/Details";
// import Checkout1 from "./components/home/Checkout1";

axios.interceptors.request.use((config) => {
  return config;
});
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (401 === error.response.status) {
//       window.location.href =
//         "/Identity/Account/Login?returnUrl=" + window.location.pathname;
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userManage.get_user_login());
  }, []);
  const getUserLogin = useSelector((state) => state.user.userLogin);
  let userLogin = getUserLogin;
  return (


    <Fragment>
      <Router history={history}>

        <Switch>
          <Home>
            <Route component={({ match }) =>
              <div>
              </div>
            } />
          </Home>

          {/* <Route exact path="/admin" component={Home} />
          <Route exact path="/abc/checkout12" component={Checkout1} /> */}
        </Switch>

      </Router>
    </Fragment>
  );
}
export default App;
