import React from "react";

import Sidebar from "./Sidebar";
import "./admin.css";
import Update from "./update/Update";

const Admin = () => {
  return (
    <div className="adm1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <Update />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
