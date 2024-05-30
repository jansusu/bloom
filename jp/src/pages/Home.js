import React from "react";
import Himg1 from "../images/Himg1.webp";
import Menimg from "../images/Menimg.png";
import Womenimg from "../images/Womenimg.png";
import Beautyimg from "../images/Beautyimg.png";
import Kidsimg from "../images/Kidsimg.png";
import Himg2 from "../images/Himg2.jpg";
import Himg3 from "../images/Himg3.jpg";
import Himg4 from "../images/Himg4.gif";
import { Link } from "react-router-dom";
import HCimg1 from "../images/HCimg1.avif";
import HCimg2 from "../images/HCimg2.avif";
import HCimg3 from "../images/HCimg3.avif";
import HCimg4 from "../images/HCimg4.avif";
import { IoBagCheck } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <>
      <div className="h2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link to="/iwm">
                <img src={Menimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/www">
                <img src={Womenimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/bk">
                <img src={Kidsimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/sb">
                <img src={Beautyimg} alt="" />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">MEN</div>
            <div className="col-lg-3">WOMEN</div>
            <div className="col-lg-3">KIDS</div>
            <div className="col-lg-3">BEAUTY</div>
          </div>
        </div>
      </div>
      <div className="himg">
        <Link to="/www">
          <img src={Himg1} alt="" />
        </Link>
      </div>
      <div className="hc">
        <div className="row">
          <div className="col-lg-3">
            <Link to="/bwm">
              <img src={HCimg1} alt="" />
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to="/www">
              <img src={HCimg2} alt="" />
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to="/twm">
              <img src={HCimg3} alt="" />
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to="/twm">
              <img src={HCimg4} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="himg2">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Himg2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Himg3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Himg4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
    </>
  );
};

export default Home;
