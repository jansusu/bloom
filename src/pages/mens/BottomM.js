import React from "react";
import { IoIosStar } from "react-icons/io";
import Pants from "../../products/Pants";
import Shorts from "../../products/Shorts";

const BottomM = () => {
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <ul>
                <h2>BOTTOM WEAR</h2>
                <li>PANTS</li>
                <li>TROUSERS</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="row">
                {Pants.map((item) => (
                  <div className="col-lg-4">
                    <div className="card" key={item.id}>
                      <img src={item.image} class="card-img-top" alt="..." />
                      <div className="card-body">
                        <button className="btn btn-success">
                          {item.rating}
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
                {Shorts.map((item) => (
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

export default BottomM;
