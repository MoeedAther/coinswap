import React from "react";
import "./App.css";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoo from './download.jpg'
import logo1 from './slide2.png'
import logo2 from './slide3.png'
import cardimg from './bg-img.jpg'
import cardimg1 from './bg-img2.jpg'


function Contactus() {
    return (
        <div>
     
<Container>
    <div className="grey-bg-color">
    <Row className="margin-top-bottom-30">
        <Col lg="6">
        <form>
        <label>Name: <br></br>
        <input type="text" placeholder="Enter your name"/>
      </label><br></br>
      <label>Email: <br></br>
        <input type="text" placeholder="Enter your email"/>
      </label><br></br>
      <label>Massege: <br></br>
      <textarea>
  
</textarea>
</label>
<button className="submit-btn">Submit</button>

      
    </form>

        </Col>
        <Col lg="1"></Col>
        <Col lg="4">
            <div className="contact-white-card">
                <h6 className="contact-page-h6">Call US</h6>
                <p>1 (234) 567 891</p>
                <p>1 (234) 567 891</p>
                <h6 className="contact-page-h6">Location</h6>
                <p>House # D12 ,Rehan Gardan Phase-I ,Lahore</p>
                <p>Rehan Gardan Phase-I</p>
                <h6 className="contact-page-h6">Business Hours</h6>
                <p>Monday to Friday</p>
                <p>10:00 to 5:00</p>
                
                

            </div>

        </Col>
        <Col lg="1"></Col>

    </Row>
    </div>
    <div className="blue-bg-color">
    <Row>
        <Col lg="6"></Col>
        <Col lg="1"></Col>
        <Col lg="4"></Col>
        <Col lg="1"></Col>
</Row>
    </div>
</Container>

   



        </div>
        );
    }
    export default Contactus;