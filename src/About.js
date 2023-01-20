import react from "react"
import { Carousel } from "react-responsive-carousel"
import aboutimg from './aboutimg.webp'
import sliderimg2 from './Features-slider-img2.jpg'
import sliderimg3 from './Features-slider-img3.jpg'
import img1 from './services-4-copyright.jpg'
import img2 from './services-5-copyright.jpg'
import img3 from './services-6-copyright.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {

  return (

    <div>

      <Container>
        <Row>
          <Col lg="7" md="7" sm="12" xs="12">
            <h1 className="color-white">
              Welcome to Coinoswap!
            </h1>
            <p class="about-description__text mb-5" data-v-49591a1a="" data-v-3f2bd18e="">
              Coinoswap is an instant cryptocurrency exchange aggregator. Our platform allows you to choose among the swap offers from major crypto exchanges collected by us in one place. We strive to simplify the exchange process as much as possible, making more than
              cryptocurrencies available for fast and registration-free swaps with the greatest rates on the market.</p>
            <div data-v-49591a1a="" data-v-3f2bd18e=""><h2 className="color-white">
              Our mission
            </h2> <p class="about-description__text mb-5" data-v-49591a1a="" data-v-3f2bd18e="">Our number one priority is to save your time — the most precious thing one has. With us, you can get the whole range of exchange offers for more than <span class="about-description__text-slot" data-v-49591a1a="" data-v-3f2bd18e="">
              1450
            </span> cryptocurrencies and tokens and <span class="about-description__text-slot">
                  600000
                </span> exchange pairs, from more than <span class="about-description__text-slot">
                  18
                </span> instant exchanges — <span class="about-description__text-slot">
                  all on one page
                </span>. Now you have no need to search the rates through different platforms and services comparing their terms and fees – we do that for you for no extra fee!</p></div>

            <div data-v-49591a1a="" data-v-3f2bd18e=""><h2 className="color-white">
              How we work
            </h2> <p class="about-description__text mb-5" data-v-49591a1a="" data-v-3f2bd18e="">Coinoswap aggregates the swap offers from major crypto exchanges, then arranges the deals in order by the best rate, and shows you the results. It produces swaps without charging you, its customer, an extra fee.</p></div>

          </Col>

          <Col lg="5" md="5" sm="12" xs="12">
            <img src={aboutimg} className='slider-img' style={{ width: '100%' }} alt='' />
          </Col>

        </Row>

        <Row>
          <Col>
            <div class="about-choosing mb-5" data-v-0e11c1f7="" data-v-68b59a5f=""><h2 className="color-white">
              Why choose us?
            </h2> <div class="row" data-v-a46bbb88="" data-v-0e11c1f7=""><div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7=""><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
              <span className="color-white">No sign-up</span></div><div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7=""><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
                  <span className="color-white">
                    18
                    partners</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7="">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
                  <span className="color-white">More than
                    1450
                    coins</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7="">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7="">
                    <path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
                  <span className="color-white">Fixed and floating rates</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7="">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
                  <span className="color-white">
                    No limits</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7="">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg>
                  <span className="color-white">24/7 support</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7="">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7=""><path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg> <span className="color-white">Affiliate program</span></div>
                <div class="column about-choosing__item-container col-6 col-md-6 col-lg-3" data-v-49591a1a="" data-v-0e11c1f7=""><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="check about-choosing__check" data-v-70981b1d="" data-v-0e11c1f7="">
                  <path d="M12.8134 2.39638L5.26113 9.94862L2.48616 7.17365C2.35162 7.03911 2.13347 7.03911 1.9989 7.17365L1.18684 7.98571C1.0523 8.12025 1.0523 8.33839 1.18684 8.47296L5.01748 12.3036C5.15202 12.4381 5.37017 12.4381 5.50474 12.3036L14.1126 3.69569C14.2472 3.56115 14.2472 3.343 14.1126 3.20844L13.3006 2.39638C13.166 2.26184 12.9479 2.26184 12.8134 2.39638Z" data-v-70981b1d=""></path></svg> <span className="color-white">User-friendly interface</span></div></div></div>
          </Col>
        </Row>


        <Row>
          <Col>
            <div class="about-roadmap mb-5"><h2 className="color-white">
              Roadmap
            </h2> 
            <div class="about-roadmap__container">
              <hr class="about-roadmap__line" ></hr>
               <hr class="about-roadmap__gradient-line"></hr> 
               <div class="about-roadmap__items-container">
                <div class="about-roadmap__text about-roadmap__top">
              5 exchange partners
            </div><div class="about-roadmap__text about-roadmap__bottom ">
                Brand visual concept 2.0
              </div><div class="about-roadmap__text about-roadmap__top">
                Open API
              </div><div class="about-roadmap__text about-roadmap__bottom ">
                10+ exchange partners
              </div><div class="about-roadmap__text about-roadmap__top">
                Cryptocurrency knowledge base
              </div><div class="about-roadmap__text about-roadmap__bottom">
                Affiliate program
              </div><div class="about-roadmap__text about-roadmap__top ">
                Affiliate account
              </div><div class="about-roadmap__text about-roadmap__bottom">
                Binance integration
              </div><div class="about-roadmap__text about-roadmap__top ">
                Fiat offers
              </div><div class="about-roadmap__text about-roadmap__bottom ">
                15+ exchange partners
              </div><div class="about-roadmap__text about-roadmap__top about-roadmap__black about-roadmap__current-even ">
                Blog and cryptocurrency knowledge base 2.0
              </div><div class="about-roadmap__text about-roadmap__bottom about-roadmap__black color-white">
                Localization
              </div><div class="about-roadmap__text about-roadmap__top about-roadmap__black color-white">
                Mobile app (iOS Android)
              </div><div class="about-roadmap__text about-roadmap__bottom about-roadmap__black color-white">
                Telegram swaps bot
              </div><div class="about-roadmap__text about-roadmap__top about-roadmap__black color-white">
                Further exchanges listings
              </div>
              </div>
              </div>
              </div>
          </Col>
        </Row>
      </Container>





    </div>

  )
}


export default About