import React from "react";
import "./App.css";
import external from './external.png'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './logo.png'
import appstore from './app-store.svg'
import google from './google-play.svg'
import andriod from './apk-android.svg'


const Footer = () => {
  return (

    <MDBFooter color="mdb-color" className="font-small pt-4">
      <MDBContainer className="text-md-left">
        <MDBRow className="text-md-left mt-3 pb-3 align-items-center">
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <img src={logo} className='img-fluid rounded' style={{ width: '130px' }} alt='' />
          </MDBCol>
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">

          </MDBCol>
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-4 ">
            <p className="font-size">Try it mobile NOW</p>
          </MDBCol>
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <a class="footer-mobile-apps__link" href="https://apps.apple.com/us/app/id1518003605" rel="nofollow noopener noreferrer" target="_blank" onclick="captureOutboundLink(&quot;https://apps.apple.com/us/app/id1518003605&quot;)">
              <img src={appstore} className='' alt='' />
            </a>
          </MDBCol>
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <a class="footer-mobile-apps__link" href="https://apps.apple.com/us/app/id1518003605" rel="nofollow noopener noreferrer" target="_blank" onclick="captureOutboundLink(&quot;https://apps.apple.com/us/app/id1518003605&quot;)">
              <img src={google} className='' alt='' />
            </a>
          </MDBCol>
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <a class="footer-mobile-apps__link" href="https://apps.apple.com/us/app/id1518003605" rel="nofollow noopener noreferrer" target="_blank" onclick="captureOutboundLink(&quot;https://apps.apple.com/us/app/id1518003605&quot;)">
              <img src={andriod} className='' alt='' />
            </a>
          </MDBCol>
        </MDBRow>
        <hr></hr>
 
        <MDBRow className="text-md-left mt-3 pb-3">
 
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6 className="font-size text-uppercase mb-3 font-weight-bold color-grey">Company</h6>
            <p>
              <a href="#!"><span className=" font-size2" >About Us</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Our Blog</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Contact</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Our Partners</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Press About Us</span></a>
            </p> 
          </MDBCol>
          {/* <hr className="w-100 clearfix d-md-none" /> */}
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6 className="font-size text-uppercase mb-3 font-weight-bold color-grey">
              Info & tools
            </h6> 
            <p>
              <a href="#!"><span className=" font-size2" >How It Works</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >FAQ</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Widgets</span></a>
            </p> 
            <p>
              <a href="#!"><span className=" font-size2" >Buy Crypto</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Track Order</span></a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6 className="font-size text-uppercase mb-3 font-weight-bold color-grey">
              For Partners
            </h6>
            <p>
              <a href="#!"><span className=" font-size2" >Affiliate Program</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >API Documentation</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Exchange Listing</span></a>
            </p> 
          </MDBCol>


          
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6 className=" font-size color-grey text-uppercase mb-3 font-weight-bold">
            Exchange Pairs
            </h6>
            <p>
              
              <a href="#!"><span className=" font-size2" > BTC to ETH</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >BTC to LTC</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >BTC to DOGE</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >BTC to XRP</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >ETH to BNB</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >BTC to XMR</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >USD to BNB</span></a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6  className=" display-none font-size text-uppercase mb-3 font-weight-bold color-grey">
              
            </h6>
            <p style={{paddingTop:"17px"}}>
              <a  href="#!"><span className=" font-size2" >BNB to BTC</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >LTC to ETH</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >XMR to BTC</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >ETH to USDT</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >USDT to ETH</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >DOGE to BTC</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >All pairs</span></a>
            </p>
          </MDBCol>

          
          <MDBCol md="4" lg="2" xl="2" sm="4" className="mx-auto mt-3">
            <h6 className="font-size text-uppercase mb-3 font-weight-bold color-grey">Supported Coins</h6>
            <p>
              <a href="#!"><span className=" font-size2" >Bitcoin</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Ethereum</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Ripple</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Litecoin</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Cardano</span></a>
            </p>
            <p>
              <a href="#!"><span className=" font-size2" >Binance Coin</span></a>
            </p>
            <p>
              <a href="allCurrencies"><span className=" font-size2" >All currencies</span></a>
            </p> 
            
          </MDBCol>

 

        </MDBRow>
        <hr className="w-100 clearfix d-md-none" />
        <hr></hr>
        <MDBRow className="d-flex ">
          <MDBCol md="4" lg="4" sm="12" xs="12">
            
          <div class="footer--social-wrapper"><a class="footer--social" href=" https://www.facebook.com/coinoswap" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://discord.com/invite/ETMPprbgDT&quot;)">
            <div class="icon-discord">
            <svg fill="#737373" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="30px" height="30px"><path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"/>
            </svg>
            </div></a>
              {/* <a class="footer--social" href="https://twitter.com/ChangeNOW_io" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://twitter.com/ChangeNOW_io&quot;)"><div class="icon icon-twitter"></div></a> */}
              {/* <a class="footer--social" href="https://t.me/changeNOW_chat" rel="nofollow noopener noreferrer" target="_blank" onclick="captureOutboundLink(&quot;https://t.me/changeNOW_chat&quot;)"><div class="icon icon-tg"></div></a> */}
              <a class="footer--social" href="https://www.youtube.com/@coinoswap" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://www.reddit.com/r/ChangeNOW_io/&quot;)">
              <div class="icon-reddit-dark">
              <svg fill="#737373" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/>
              </svg>
              </div></a>
              <a class="footer--social" href="https://twitter.com/coinoswap" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://changenow-io.medium.com/&quot;)"><div class="icon-medium-dark">
              <svg fill="#737373" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/>
              </svg>
              </div></a>
              {/* <a class="footer--social" href="https://www.facebook.com/ChangeNOW.io/" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://www.facebook.com/ChangeNOW.io/&quot;)"><div class="icon icon-facebook"></div></a> */}
              {/* <a class="footer--social" href="https://www.instagram.com/changenow_io/" rel="nofollow noopener noreferrer" target="_blank" onclick="captureOutboundLink(&quot;https://www.instagram.com/changenow_io/&quot;)"><div class="icon icon-instagram"></div></a> */}
              <a class="footer--social" href="https://www.instagram.com/coinoswap/" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://www.youtube.com/ChangeNOW&quot;)"><div class="icon-youtube-dark">
              <svg fill="#737373" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
              </svg>
              </div>
              </a>

              <a class="footer--social" href="https://www.tiktok.com/@coinoswap" target="_blank" rel="nofollow noopener noreferrer" onclick="captureOutboundLink(&quot;https://www.youtube.com/ChangeNOW&quot;)"><div class="icon-youtube-dark">
              <svg fill="#737373" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
              </svg>
              </div></a>
              
              </div>
            
            
            
            
            

            
          </MDBCol>
          <MDBCol md="4" lg="4" sm="12" xs="12" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#!" className=" termhovr btn-floating btn-sm rgba-white-slight mx-1 color-grey">
                  Terms of Use
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="termhovr btn-floating btn-sm rgba-white-slight mx-1 color-grey">
                  Privacy Policy
                  </a>
                </li>
               
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="4" lg="4" sm="12" xs="12" className="ml-lg-0">

            
            <p  className=" font-size2 text-md-left grey-text color-grey">
              © Coinoswap - 2023 by Coinoissuers. All Rights Reserved
            </p>


            {/* <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div> */}
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;