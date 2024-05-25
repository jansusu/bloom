import React from "react";
import { IoBagCheck } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Bjio from "../images/Bjio.png";
import Bvisa from "../images/Bvisa.jpg";
import Bmaster from "../images/Bmaster.jpg";

const Footer = () => {
  return (
    <>
      <section className="foot">
        <div className="container">
          <div className="row foot1">
            <div className="col-lg-4">
              <IoBagCheck />
            </div>
            <div className="col-lg-4">
              <FaHandHoldingHeart />
            </div>
            <div className="col-lg-4">
              <TiTick />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">Easy Exchange</div>
            <div className="col-lg-4">100% HandPicked</div>
            <div className="col-lg-4">Assured Quality</div>
          </div>
        </div>
      </section>
      <div className="container-fluid foot4">
        <div className="row foot2">
          <div className="col-lg-3">Bloom</div>
          <div className="col-lg-3">Help</div>
          <div className="col-lg-3">Shop by</div>
          <div className="col-lg-3">Follow Us</div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">Who We Are</div>
          <div className="col-lg-3">Track Your Order</div>
          <div className="col-lg-3 foot5">
            <Link className="ft1" to="/twm">
              Men
            </Link>
          </div>
          <div className="col-lg-3">Facebook</div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">Join Our Team</div>
          <div className="col-lg-3">Frequently Asked Questuons</div>
          <div className="col-lg-3">
            <Link className="ft1" to="/iww">
              Women
            </Link>
          </div>
          <div className="col-lg-3">Instagram</div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">Terms & Conditions</div>
          <div className="col-lg-3">Returns</div>
          <div className="col-lg-3">
            <Link className="ft1" to="/bk">
              kids
            </Link>
          </div>
          <div className="col-lg-3">Twitter</div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">We Respect Your Privacy</div>
          <div className="col-lg-3">Cancellations</div>
          <div className="col-lg-3">
            <Link className="ft1" to="/sb">
              Beauty
            </Link>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">Returns & Refund Policies</div>
          <div className="col-lg-3">Customer Care</div>
          <div className="col-lg-3">
            <Link className="ft1" to="/">
              Home
            </Link>
          </div>
          <div className="col-lg-3">Pintrest</div>
        </div>
        <div className="row foot3">
          <div className="col-lg-3">Promotion Terms & Conditions</div>
          <div className="col-lg-3">Payments</div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ft2">Payment Systems</div>
            <div className="col-lg-6 ft3">Security Systems</div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 ft4">
                  <img src={Bjio} alt="" />
                </div>
                <div className="col-lg-4 ft5">
                  <img src={Bmaster} alt="" />
                </div>
                <div className="col-lg-4 ft5">
                  <img src={Bvisa} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
