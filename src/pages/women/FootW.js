import React from "react";
import Fwomen from "../../products/Fwomen";
import { IoIosStar } from "react-icons/io";
const FootW = () => {
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <ul>
                <h2>FOOTWEAR</h2>
                <li>Sandals</li>
                <li>Shoes</li>
                <li>Flip-Flops</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="row">
                {Fwomen.map((item) => (
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

export default FootW;
