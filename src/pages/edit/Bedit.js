import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const Bedit = () => {
  const { id } = useParams();
  const [productDatab, setProductDatab] = useState({
    image: "",
    title: "",
    ds: "",
    price: "",
  });
  useEffect(() => {
    fetch(`http://localhost:3400/productb/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDatab(data));
  });
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;

    const productObj = {
      image,
      title,
      ds,
      price,
    };
    console.log(productObj);
    fetch(`http://localhost:3400/productb/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("food added successfully");
        window.location.href = "/bupdate";
      });
  };
  return (
    <div className="edit1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container upload2">
              <form onSubmit={handleUpdate}>
                <div className="upload4">Upload Beauty product</div>
                <div className="upload3">
                  <label value="image">Image</label>
                  <br />
                  <input
                    type="text"
                    id="image"
                    defaultValue={productDatab.image}
                  />
                </div>
                <div className="upload3">
                  <label value="title">Title</label>
                  <br />
                  <input
                    type="text"
                    id="title"
                    defaultValue={productDatab.title}
                  />
                </div>
                <div className="upload3">
                  <label value="ds">Description</label>
                  <br />
                  <input type="text" id="ds" defaultValue={productDatab.ds} />
                </div>
                <div className="upload3">
                  <label value="price">Price</label>
                  <br />
                  <input
                    type="text"
                    id="price"
                    defaultValue={productDatab.price}
                  />
                </div>
                <button className="btn btn-success" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedit;