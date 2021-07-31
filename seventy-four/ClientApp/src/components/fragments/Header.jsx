import React, { useState } from "react";
import "../../css/fragments_css/header.css";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Header(props) {
  const getUserList = useSelector((state) => state.user.userLogin);
  let userLogin = getUserList;

  const onLogout = () => {};
  return (
    <div id="header">
      <label id="lblNav">{props.page}</label>
      <div id="dropdown-nav">
        <Dropdown>
          <Dropdown.Toggle variant="danger" size="sm" id="dropdown-basic">
            {userLogin.userName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Change Password</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={onLogout}>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
