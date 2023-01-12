import React, { useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { MdSearch, MdHelpOutline, MdSettings, MdMenu } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import img from "../../assets/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <IconContext.Provider value={{ size: "20px", color: "5E6268" }}>
      <div className="content">
        <div className="wrapper">
          <div className="leftNavContainer">
            <MdMenu size={'1.5em'}/>
            <a>
              <img src={img} alt="C" />
              <span>Contacts</span>
            </a>
          </div>

          <div className="midNavContainer">
            <div className="searchBox">
              <MdSearch size={'1.5em'}></MdSearch>
              <input type="text" placeholder="Search" onChange={handleSearch} />
              {search}
            </div>
          </div>

          <div className="rightNavContainer">
            <div>
              <MdHelpOutline />
            </div>
            <div>
              <MdSettings />
            </div>
            <div>
              <TbGridDots />
            </div>
            <div>img</div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
