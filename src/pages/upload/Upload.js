import React from "react";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const ds = form.ds.value;
    const price = form.price.value;
    const quantity = 1;

    if (image === "" || title === "" || ds === "" || price === "") {
      toast.warn("fill all the fields");
    }
    const foodObj = {
      image,
      title,
      ds,
      price,
      quantity,
    };
    console.log(foodObj);

    fetch("http://localhost:3400/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Added Successfully");
        form.reset();
        window.location.href = "/update";
      });
  };

  return (
    <div className="upload1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <div className="container upload2">
              <form onSubmit={handleSubmit}>
                <div className="upload4">Upload product</div>
                <div className="upload3">
                  <label value="image">Image</label>
                  <br />
                  <input type="text" name="image" id="image" />
                </div>
                <div className="upload3">
                  <label value="title">Title</label>
                  <br />
                  <input type="text" name="title" id="title" />
                </div>
                <div className="upload3">
                  <label value="ds">Description</label>
                  <br />
                  <input type="text" name="ds" id="ds" />
                </div>
                <div className="upload3">
                  <label value="price">Price</label>
                  <br />
                  <input type="text" name="price" id="price" />
                </div>
                {/* <div className="upload3">
                  <label value="quantity">Quantity</label>
                  <br />
                  <input type="number" name="quantity" />
                </div> */}
                <button type="submit" className="btn btn-success">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
