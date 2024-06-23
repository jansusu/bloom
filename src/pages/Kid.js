import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, ToastContainer, toast } from "react-toastify";
// import Kidspdt from "../products/Kidspdt";
import { addToCart, deleteFromCart } from "../store/cartslice/Cartslice";

const Kid = () => {
  const removeItem = () =>
    toast.warning("Item Removed From Bucket!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const addItem = () =>
    toast.success("Item Added To Bucket", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
    addItem();
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    removeItem();
  };
  const [productsKids, setProductsKids] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3400/allproductk`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProductsKids(data);
        }
      });
  });

  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <ToastContainer />
          <div className="row">
            <div className="col-lg-2 mfix">
              <ul>
                <h2>BOYS CLOTHS</h2>
                <li>Kurtas</li>
                <li>Shirts</li>
                <li>Flip-Flops</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="row">
                {productsKids.map((item) => (
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
                        <h4 className="card-text">₹{item.price}</h4>
                        {cartProducts.find((items) => items.id === item.id) ? (
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              deleteCart(item);
                            }}
                          >
                            Remove from cart
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              addCart(item);
                            }}
                          >
                            AddToCart
                          </button>
                        )}
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

export default Kid;
