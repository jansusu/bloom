import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { toast } from "react-toastify";

const Wupdate = () => {
  const [productItems2, setProductItems2] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3400/allproductw`)
      .then((res) => res.json())
      .then((data) => setProductItems2(data));
  }, []);
  const deleteProduct = (id) => {
    fetch(`http://localhost:3400/productw/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product successfully Deleted !");
        setProductItems2((prevProductrItems) =>
          prevProductrItems.filter((item) => item._id !== id)
        );
      });
  };
  return (
    <div className="update1">
      <div className="container">
        <div className="update2">
          <h2>Updated women Products</h2>
        </div>
        {productItems2.map((item) => (
          <div className="card mb-3" key={item._id}>
            <div className="row g-0">
              <div className="col-md-4 update1a">
                <img
                  src={item.image}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.ds}</p>
                  <p className="card-text">₹{item.price}</p>
                </div>
              </div>
              <div className="col-md-2 update3">
                <Link to={`/wedit/${item._id}`}>
                  <button className="btn btn-warning">
                    Edit
                    <GrEdit />
                  </button>
                </Link>
              </div>
              <div className="col-md-2 update3">
                <button
                  onClick={() => deleteProduct(item._id)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wupdate;
