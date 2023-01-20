import React from "react";
import "./App.css";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconimg1 from './icon1.PNG'
import iconimg2 from './icon2.PNG'
import iconimg3 from './icon3.PNG'
import logo1 from './slide2.png'




function Blog() {
    
    return (
        <div>

        <div className="blog-bg">
            <h3 className="color-white blog-heading">Blog Page</h3>
            <p className="color-white">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
           
        </div>
<Container>
    <Row className="margin-bottom-30">
        <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg1} className='iconimg1' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
        <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg2} className='iconimg2' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
        <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg3} className='iconimg3' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
    </Row>
    <Row>
    <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg1} className='iconimg1' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
        <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg2} className='iconimg2' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
        <Col lg="4" md="4" sm="12">
        <div className="thumnail">
        <img src={iconimg3} className='iconimg3' style={{ }} alt=''/>
        <h3 className="blog-card-h3">Card One</h3>
        <p className="color-grey">Lorem Ipsum has been the when a galley of type and scrambled it to make a like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href ="#">GO GOOGLE</a>
        </div>
        </Col>
    </Row>

    <Carousel className="carousel margin-top-20">
        <Carousel.Item interval={2000}>
            <Row>
                <Col>
                <img
            className="d-block mx-auto blog-slider-img"
            src="https://i.imgur.com/4kZFFp9.png"
            alt="First slide"
          />
                
                </Col>
                <Col>
                <img
            className="d-block mx-auto blog-slider-img"
            src="https://i.imgur.com/4kZFFp9.png"
            alt="First slide"
          />
                
                </Col>
                <Col>
                <img
            className="d-block mx-auto blog-slider-img"
            src="https://i.imgur.com/4kZFFp9.png"
            alt="First slide"
          />
                
                </Col>
            </Row>
          
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block mx-auto blog-slider-img"
            src="https://i.imgur.com/BuNGcJI.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block mx-auto blog-slider-img"
            src="https://i.imgur.com/UDBoRJn.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>


</Container>



<div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>React Bootstrap Carousel</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 blog-slider-img"
                                        src="https://picsum.photos/500/300?img=1"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 blog-slider-img"
                                        src="https://picsum.photos/500/300?img=2"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 blog-slider-img"
                                        src="https://picsum.photos/500/300?img=3"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>



        </div>
        );
    }
    export default Blog;