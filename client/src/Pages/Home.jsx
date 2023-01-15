import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import './Home.css'
import '../main.css'

const Home = () => {
  
  const toggler = useSelector(state=> state.toggler)
  console.log(toggler)

  const { toggle } = toggler[toggler.length - 1];

  return (
    <div className="container">
      <Navbar />
      <div className="home-wrapper">
        {toggle ?<div className="sidebar-wrapper">
          <Sidebar />
        </div> : null}
        <div className="main-wrapper">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;