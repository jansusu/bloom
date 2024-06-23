import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  updateQuantity,
} from "../store/cartslice/Cartslice";
import "react-toastify/ReactToastify.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const removeItem = () =>
    toast.warning("Item Removed From Cart", {
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

  const deletcart = (item) => {
    dispatch(deleteFromCart(item));
    removeItem();
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };
  const totalQuantity = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalPrice = totalAmount.toFixed(2);
  return (
    <>
      <div className="container-fluid">
        <ToastContainer />
        {totalQuantity ? (
          <div className="container-fluid d-flex pt-5">
            <div className="col-lg-10 mt-4 cartpg">
              <div className="card mt-5">
                <h1 className="card-title text-center mt-3 mb-3">Your cart</h1>
                <div className="table-responsive">
                  <table className="cartt">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                        <th>Qnty</th>
                        <th></th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartProducts.map((item) => (
                        <tr>
                          <td className="tds" key={item._id}>
                            <img src={item.image} alt="" />
                          </td>
                          <td className="td1 fw-bold">{item.title}</td>
                          <td className="td1">{item.ds}</td>
                          <td className="td1">{item.price}</td>
                          <td className="tds4">
                            <button
                              onClick={() =>
                                decrementCart(item._id, item.quantity)
                              }
                            >
                              -
                            </button>
                          </td>
                          <td>
                            <h4 className="mt-2 text-center">
                              {item.quantity}
                            </h4>
                          </td>
                          <td className="tds4">
                            <button
                              className="h-75 mt-2 ms-2 qtybtn "
                              onClick={() =>
                                incrementCart(item._id, item.quantity)
                              }
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                deletcart(item);
                              }}
                            >
                              Delete Item
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-2 cartpg1">
              <div className="card">
                <h1 className="card-title text-center">{totalQuantity}Items</h1>
                <button>
                  Checkout<span>₹{totalPrice}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="c1">
            <h1 className="c2 text-center fw-bold">Your cart is Empty!!!</h1>
            <p>
              <Link to="/">
                <button>Keep Shopping</button>
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
