import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="container">
        {/* <div className="row"> */}
        {/* <div className="col-lg-3 side"> */}
        <h2>Dashboard</h2>
        <div className="sidepa">
          <h2>Men</h2>
          <div className="sidech-dropdown">
            <p>
              <Link className="lin" to="/upload">
                Upload
              </Link>
            </p>
            <p>
              <Link className="lin" to="/update">
                Update
              </Link>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>Women</h2>
          <div className="sidech-dropdown">
            <p>
              <Link className="lin" to="/wupload">
                Upload
              </Link>
            </p>
            <p>
              <Link className="lin" to="/wupdate">
                Update
              </Link>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>Kids</h2>
          <div className="sidech-dropdown">
            <p>
              <Link className="lin" to="/kupload">
                Upload
              </Link>
            </p>
            <p>
              <Link className="lin" to="/kupdate">
                Update
              </Link>
            </p>
          </div>
        </div>
        <div className="sidepa">
          <h2>Beauty</h2>
          <div className="sidech-dropdown">
            <p>
              <Link className="lin" to="/bupload">
                Upload
              </Link>
            </p>
            <p>
              <Link className="lin" to="/bupdate">
                Update
              </Link>
            </p>
          </div>
        </div>
        {/* </div>
          <div className="col-lg-9"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
