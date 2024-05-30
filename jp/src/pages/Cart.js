import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/cartslice/Cartslice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deletcart = (item) => {
    dispatch(deleteFromCart(item));

    const incrementCart = (id, quantity) => {
      dispatch(updateQuantity({ id, quantity: quantity + 1 }));
    };

    const decrementCart = (id, quantity) => {
      if (quantity > 1) {
        dispatch(updateQuantity({ id, quantity: quantity - 1 }));
      }
    };
  };
  return (
    <>
      <div className="container d-flex pt-5">
        <div className="col-lg-12 mt-4 cartpg">
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
                    <th>Quantity</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {cartProducts.map((item) => (
                    <tr>
                      <td className="tds" key={item.id}>
                        <img src={item.image} alt="" />
                      </td>
                      <td className="td1 fw-bold">{item.title}</td>
                      <td className="td1">{item.ds}</td>
                      <td className="td1">{item.price}</td>
                      <td className="tds4">
                        <button
                          className="h-75 mt-2 ms-2 qtybtn"
                          onClick={() => decrementCart(item.id, item.quantity)}
                        >
                          -
                        </button>
                        <h4 className="mt-2">{item.quantity}</h4>
                        <button
                          className="h-75 mt-2 ms-2 qtybtn "
                          onClick={() => incrementCart(item.id, item.quantity)}
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
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
