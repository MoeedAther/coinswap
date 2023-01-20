import React, { useState } from "react";
import "./App.css";
import { Carousel, Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoo from "./mainlogo-removebg-preview.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import img1 from "./img1.webp";
import { Link } from "react-router-dom";
import stars from "./stars-two.svg";
import slide1 from "./slide1.svg";
import slide2 from "./nexchange-default.svg";
import slide3 from "./slide3.png";
import rating from "./rating.png";
import ratestar from "./star.png";
import slide4 from "./WNU2FXfEZjj4G_6OAj20fC8j.svg";
import slide5 from "./sideshift-logo-light.svg";
import slide6 from "./slide6.png";
import slide7 from "./logo_grey.svg";
import slide8 from "./ceLM1cqh_Np6mCSeRHbWH_pf.svg";
import payments from "./payments.svg";
import currancy from "./currency-exchange.png";
import currancy1 from "./currency-exchange1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Modal, Button } from "react-bootstrap";
import Particles from "react-particles";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import ExchangeCrypto from "./ExchangeCrypto";
import BuyCrypto from "./BuyCrypto";
import CryptoBuyExchange from "./CryptoBuyExchange";
{/* TrustBox script  */ }
<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
{/* End TrustBox script */ }
function Home() {
  const src =
    "https://www.youtube.com/embed/watch?v=uQEMDjwc0P0&list=RDuQEMDjwc0P0&start_radio=1";
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [val,setVal]=useState(0.1);
  // let [sel1,setSel1]=useState("btc")
  // let [sel2,setSel2]=useState("eth");
  // let [reVal,setReVal]=useState(1.41508867)

  // let [val2,setVal2]=useState(27);
  // let [sel11,setSel11]=useState("usdd")
  // let [sel22,setSel22]=useState("btc");
  // let [reVal2,setReVal2]=useState(0.00165267)
  // let [min,setMin]=useState(27);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let result = await fetch(
      "https://api.changenow.io/v1/currencies?active=true",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    setData(
      result.map((coin) => {
        return { symbol: coin.ticker, name: coin.name, image: coin.image };
      })
    );
  }, []);

  // const handleBuyChange=async (e)=>{
  //   setVal2(e.target.value);
  //   // if(val2>e.target.value)
  //   // {alert(`Minimum Amount should be : ${min}`)}
  //   if(sel11==sel22)
  //   {
  //     setReVal2(e.target.value)
  //   }
  //   else{
  //     let result = await fetch(`https://api.changenow.io/v1/exchange-amount/${e.target.value}/${sel11}_${sel22}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   result = await result.json();
  //   setReVal2(result.estimatedAmount)
  // }
  // }

  const aquaticCreatures = async () => {
    // let result = await fetch("https://api.changenow.io/v1/currencies?active=true", {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // result = await result.json();
    // setData(result.map(coin=>{return {value:coin.ticker, label:coin.ticker}}))
    // if (result.user) {
    //     // localStorage.setItem('user', JSON.stringify(result.user));
    //     //localStorage.setItem('token', JSON.stringify(result.auth));
    // } else {
    //     alert("Please enter connect details")
    // }
  };
  return (
    <div className="body-bg-color">
      <div className="margin-top-bottom-50">
        <Container>
          <Row>
            <Col sm={12} lg={5}>
              <ExchangeCrypto />
            </Col>
            <Col sm={12} lg={1}>
              {/* <span className="circle2"></span> */}
              <div id="mySidenav">
                <button
                  className="wrapCalculator_watchVideo__2t7Fq"
                  onClick={handleShow}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="playIcon">
                    <symbol id="play_svg__a" viewBox="0 0 15 17">
                      <path
                        d="M14 8L.5 15.794V.206L14 8z"
                        fill="currentColor"
                      ></path>
                    </symbol>
                    <use href="#play_svg__a"></use>
                  </svg>
                  <span>Watch video</span>
                </button>
              </div>

              <Modal
                className="vedio-modal"
                show={show}
                onHide={handleClose}
                size="lg"
              >
                <Modal.Header closeButton>
                  {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  <iframe
                    width="100%"
                    height="315"
                    src={src}
                    title="Youtube Player"
                    allowFullScreen
                  />
                </Modal.Body>
                {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
              </Modal>
            </Col>
            <Col sm={12} lg={6}>
              {/* <div className="rotate-img"></div> */}
              {/* <div className="circle"></div> */}
              <div
                data-v-5a319364=""
                className="index-rates__info index-rates__info "
              >
                <h1 data-v-5a319364="" className="index-rates__info_title">
                  Freedom to choose
                  <span className="display-block">
                    your exchange
                    {/* <span className="circle1"></span> */}
                  </span>
                </h1>{" "}
                <p data-v-5a319364="" className="index-rates__info_slogan  ">
                  Best Rates — Infinite Swaps
                </p>
              </div>
              <a
                className="recommended-wallet-button recommended-wallet-button_desktop"
                onclick='captureOutboundLink("https://walletnow.app")'
                href="https://walletnow.app"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span style={{ paddingLeft: "8px" }}>Get our Wallet</span>

                <img
                  src={logoo}
                  className="recommended-wallet-button__logo"
                  style={{ width: "55px" }}
                  alt="Now Wallet"
                  decoding="async"
                />
                {/* <img class="recommended-wallet-button__stars-icon" src={stars} alt="Now Wallet" decoding="async" width="38" height="25" /> */}
                {/* <img class="recommended-wallet-button__stars-icon" src="/images/stars-two.svg" alt="Now Wallet" decoding="async" width="38" height="25" /> */}
              </a>
              <div style={{ marginTop: "20px" }}>
                <p data-v-5a319364="" className="index-rates__info_slogan">
                  Watch Tutorial
                </p>
              </div>

              {/* <div className="circle"></div> */}
              {/* <a href="#" className="imglink"> <img src={stars} alt='' /> </a> */}
              {/* <div className="circle3"></div> */}
            </Col>
          </Row>
          <div data-v-17d4b3a3="" data-v-e8aa6b62="" className="index__banner">
            <Row>
              <Col sm={6} lg={10}>
                <a target="_blank" href="https://www.trustpilot.com/review/coinoswap.com">
                  <img src={payments} alt="" />
                </a>
              </Col>

              <Col sm={6} lg={2}>
                <div className="margin-left-15">
                  <a target="_blank" href="https://www.trustpilot.com/review/coinoswap.com">
                    <img src={ratestar} alt="" className="img-width" />
                    <span className="rate-label"> Trustpilot</span>
                  </a>
                </div>
                <div className="">
                  <a target="_blank" href="https://www.trustpilot.com/review/coinoswap.com">
                    <img src={rating} alt="" className="img-width" />
                  </a>
                </div>
                <p className="margin-left-10 color-white">Excellent Rating</p>
              </Col>
            </Row>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            // autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={slide1}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src={slide4} className='slider-img' style={{ width: '100%' }} alt='' />
            </SwiperSlide> */}
            <SwiperSlide>
              <img
                src={slide5}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide6}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide7}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide8}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide1}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                className="slider-img"
                style={{ width: "100%" }}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
}
export default Home;
