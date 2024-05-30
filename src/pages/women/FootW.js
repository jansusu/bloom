import React from "react";
import Fwomen from "../../products/Fwomen";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../store/cartslice/Cartslice";

const FootW = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
    //Item added()
  };
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    //Item added()
  };
  return (
    <>
      <div className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 mfix">
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

export default FootW;
