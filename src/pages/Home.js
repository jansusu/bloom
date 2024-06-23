import React from "react";
import "./cate.css";
import Menimg from "../images/Menimg.png";
import Womenimg from "../images/Womenimg.png";
import Beautyimg from "../images/Beautyimg.png";
import Kidsimg from "../images/Kidsimg.png";
import Himg2 from "../images/Himg2.jpg";
import Himg3 from "../images/Himg3.jpg";
import Himg4 from "../images/Himg4.gif";
import { Link } from "react-router-dom";
import Womenvd from "../images/Womenvd.jfif";
// import HCimg1 from "../images/HCimg1.avif";
// import HCimg2 from "../images/HCimg2.avif";
// import HCimg3 from "../images/HCimg3.avif";
// import HCimg4 from "../images/HCimg4.avif";
import swiperimg1 from "../images/swiperimg1.avif";
import swiperimg2 from "../images/swiperimg2.avif";
import swiperimg3 from "../images/swiperimg3.avif";
import swiperimg4 from "../images/swiperimg4.avif";
import swiperimg5 from "../images/swiperimg5.avif";
import swiperimg6 from "../images/swiperimg6.avif";
import { IoBagCheck } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <div className="h2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link to="/men">
                <img src={Menimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/women">
                <img src={Womenimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/kid">
                <img src={Kidsimg} alt="" />
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/beauty">
                <img src={Beautyimg} alt="" />
              </Link>
            </div>
          </div>

          <div></div>
          <div className="row">
            <div className="col-lg-3">MEN</div>
            <div className="col-lg-3">WOMEN</div>
            <div className="col-lg-3">KIDS</div>
            <div className="col-lg-3">BEAUTY</div>
          </div>
        </div>
      </div>
      <div className="swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={swiperimg1} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperimg2} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperimg3} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperimg4} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperimg5} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperimg6} class="d-block w-100" alt="..." />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      {/* <div className="himg">
        <Link to="/www">
          <img src={Himg1} alt="" />
        </Link>
      </div> */}
      {/* <div className="hc">
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
      </div> */}
      {/* <div className="himg2">
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
      </div> */}
      <div>
        <h3 className="ca1">
          <b>Trendy stylish menswear</b>
        </h3>
      </div>
      <div className="container-fluid">
        <div className="row c11">
          <div className="col-lg-2 c1a">
            <Link className="lin" to="/twm">
              Shirts
            </Link>
          </div>
          <div className="col-lg-2 c1b">
            <Link className="lin" to="/twm">
              TShirts{" "}
            </Link>
          </div>
          <div className="col-lg-2 c1c">
            <Link className="lin" to="/iwm">
              {" "}
              Ethnics{" "}
            </Link>
          </div>
          <div className="col-lg-2 c1d">
            <Link className="lin" to="/fwm">
              Trendy Shoes
            </Link>
          </div>
          <div className="col-lg-2 c1e">
            <Link className="lin" to="/bwm">
              Trousers
            </Link>{" "}
          </div>
          <div className="col-lg-2 c1f">
            <Link className="lin" to="/bwm">
              Shorts
            </Link>{" "}
          </div>
        </div>
      </div>
      <div>
        <h3 className="ca1">
          <b>Sweet & sassy styles for everyday fashion</b>
        </h3>
      </div>
      <div className="container-fluid">
        <div className="row c12">
          <div className="col-lg-2 c2a">
            <Link className="lin" to="/iww">
              sarees
            </Link>
          </div>
          <div className="col-lg-2 c2b">
            <Link className="lin" to="/iww">
              Kurtis
            </Link>
          </div>
          <div className="col-lg-2 c2c">
            <Link className="lin" to="/www">
              western
            </Link>
          </div>
          <div className="col-lg-2 c2d">
            <Link className="lin" to="/sww">
              Sports
            </Link>
          </div>
          <div className="col-lg-2 c2e">
            <Link className="lin" to="/fww">
              Footwear
            </Link>
          </div>
          <div className="col-lg-2 c2f">
            <Link className="lin" to="/www">
              Tops
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="ca1">
          <b> Cute fits for lil' ones</b>
        </h3>
      </div>
      <div className="container-fluid">
        <div className="row c12">
          <div className="col-lg-2 c3a">
            <Link className="lin" to="/bk">
              Casuals
            </Link>
          </div>
          <div className="col-lg-2 c3b">
            <Link className="lin" to="/gk">
              Girls Ethnics
            </Link>
          </div>
          <div className="col-lg-2 c3c">
            <Link className="lin" to="/bk">
              Boys Ethnics
            </Link>
          </div>
          <div className="col-lg-2 c3d">
            <Link className="lin" to="/bk">
              Flipons
            </Link>
          </div>
          <div className="col-lg-2 c3e">
            <Link className="lin" to="/gk">
              Shoes
            </Link>
          </div>
          <div className="col-lg-2 c3f">
            <Link className="lin" to="/tk">
              Playtime{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="ca1">
          <b>Beauty And Grooming</b>
        </h3>
      </div>
      <div className="container-fluid">
        <div className="row c12">
          <div className="col-lg-3 c4a">
            <Link className="lin" to="/sb">
              Skin Care
            </Link>
          </div>
          <div className="col-lg-3 c4b">
            <Link className="lin" to="/hb">
              Hair Care
            </Link>
          </div>
          <div className="col-lg-3 c4c">
            <Link className="lin" to="/mb">
              Makeup
            </Link>
          </div>
          <div className="col-lg-3 c4d">
            <Link className="lin" to="/fb">
              Fragrances
            </Link>
          </div>
        </div>
      </div>
      <div className="ops1">
        <div>
          <h3 className="ca1">
            <b>Discover the key trends of the season</b>
          </h3>
        </div>
        <div className="container-fluid">
          <div className="row ops2">
            <div className="col-lg-3 ops2a ">
              <Link className="lin" to="/iww">
                WOMEN
              </Link>
            </div>
            <div className="col-lg-3 ops2b ">
              <Link className="lin" to="/twm">
                MEN
              </Link>
            </div>
            <div className="col-lg-3 ops2c ">
              <Link className="lin" to="/bk">
                KIDS{" "}
              </Link>
            </div>
            <div className="col-lg-3 ops2d ">
              <Link className="lin" to="/sb">
                BEAUTY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper">
        <div className="ca1 fw-bold">
          <h2>Elevate Your Style</h2>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Himg2} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Himg3} class="d-block w-100" alt="..." />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Himg4} class="d-block w-100" alt="..." />
          </SwiperSlide>

          {/* <SwiperSlide>slide4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
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
