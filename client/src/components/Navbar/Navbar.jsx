import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { MdSearch, MdHelpOutline, MdSettings, MdMenu } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import img from "../../assets/logo.png";
import { useField } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { setToggle } from "../../reducers/togglingReducers";

const Navbar = () => {
  const search = useField();
  const toggler = useSelector((state) => state.toggler);
  const dispatch = useDispatch();

  const { toggle } = toggler[toggler.length - 1];

  const handleToggle = () => {
    dispatch(setToggle(toggle ? false : true));
  };

  return (
    <IconContext.Provider value={{ size: "20px", color: "5E6268" }}>
      <div className="content">
        <div className="wrapper">
          <div className="leftNavContainer">
            <div onClick={handleToggle}>
              <MdMenu size={"1.5em"} />
            </div>
            <a>
              <img src={img} alt="C" />
              <span>Contacts</span>
            </a>
          </div>

          <div className="midNavContainer">
            <div className="searchBox">
              <MdSearch size={"1.5em"}></MdSearch>
              <input
                type={search.type}
                placeholder="Search"
                onChange={search.onChange}
              />
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
