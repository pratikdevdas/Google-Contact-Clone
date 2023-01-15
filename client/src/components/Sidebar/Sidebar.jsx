import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <div>
         <Link to="/contacts/form">Create Contact</Link>
        </div>
        <div>
          <div><Link to="contacts"> Contacts</Link></div>
          <div><Link to="frequentcontacts"> Frequently Contacted</Link></div>
          <div><Link to="contactsmerge"> Merge & Fix</Link></div>
        </div>
        <div>
          <div>Labels</div>
        </div>
        <div>
          <div>Import</div>
          <div>Export</div>
          <div>Print</div>
        </div>
        <div>
          <div>Other Contacts</div>
          <div>Trash</div>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;
