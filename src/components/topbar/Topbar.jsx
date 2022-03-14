import React from "react";
import "./topbar.css";
import {ExitToApp} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deleteCurrentUserSuccess, deleteUserFailure, deleteUserStart } from "../../redux/userRedux";


export default function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(deleteUserStart());
    try {
      dispatch(deleteCurrentUserSuccess());
    } catch (error) {
      dispatch(deleteUserFailure());
    }
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Administrados HERAS</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}
          <div className="topbarIconContainer" onClick={handleLogout}>
            <ExitToApp/>
          </div>
        </div>
      </div>
    </div>
  );
}
