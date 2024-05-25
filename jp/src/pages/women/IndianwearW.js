import React from "react";
import { IoIosStar } from "react-icons/io";
import Saree from "../../products/Saree";
import Kurti from "../../products/Kurti";

const IndianwearW = () => {
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <ul>
                <h2>INDIAN WEAR</h2>
                <li>SAREES</li>
                <li>KURTIS</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="row">
                {Saree.map((item) => (
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
              <div className="row">
                {Kurti.map((item) => (
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

export default IndianwearW;
