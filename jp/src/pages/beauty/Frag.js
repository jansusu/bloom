import React from "react";
import { IoIosStar } from "react-icons/io";
import FBeauty from "../../products/FBeauty";

const Frag = () => {
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <ul>
                <h2>FRAGRANCES</h2>
                <li>Body Mist</li>
                <li>Body Oil</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="row">
                {FBeauty.map((item) => (
                  <div className="col-lg-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} class="card-img-top" alt="..." />
                      <div className="card-body">
                        <button className="btn btn-success">
                          {item.rate}
                          <IoIosStar />
                        </button>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.ds}</p>
                        <h4 className="card-text">{item.price}</h4>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frag;
