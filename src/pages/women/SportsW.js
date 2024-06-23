import React from "react";
import Active from "../../products/Active";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/cartslice/Cartslice";
import "react-toastify/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

const SportsW = () => {
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
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 mfix">
              <ul>
                <h2>SPORTS Wear</h2>
                <li>ACTIVE WEAR</li>
                <li>TRACK PANTS</li>
              </ul>
            </div>
            <div className="col-lg-10">
              <ToastContainer />
              <div className="row">
                {Active.map((item) => (
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
                            AddToCar
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

export default SportsW;
