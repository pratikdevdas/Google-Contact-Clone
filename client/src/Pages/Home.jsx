import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import { setToggle } from "../reducers/togglingReducers";
import "./Home.css";
import "../main.css";

const Home = () => {
  const toggler = useSelector((state) => state.toggler);
  const dispatch = useDispatch();
  const { toggle } = toggler[toggler.length - 1];

  const closeSidebarInSmallScreen = () => {
    dispatch(setToggle(window.innerWidth < 1024 ? false : true));
  };

  return (
    <div className="container">
      <Navbar />
      <div className="home-wrapper" onClick={closeSidebarInSmallScreen}>
        {toggle ? (
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
        ) : null}
          <div className="main-wrapper" onClick={closeSidebarInSmallScreen}>
            <Outlet></Outlet>
          </div>
      </div>
    </div>
  );
};

export default Home;
