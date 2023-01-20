import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
// import logoo from "./mainlogo-removebg-preview.png";
import logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
import eng from "./united-kingdom.png";
import german from "./germany.png";
import ReactFlagsSelect from "react-flags-select";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// import Particles from 'react-particles-js';

function Navbarr() {
  const [select, setSelect] = useState("US");
  const onSelect = (code) => setSelect(code);

  // BEM convention
  return (
    <div className="bg-color margin-bottom-50">

      <Navbar className="bg-color" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              className="img-fluid rounded"
              style={{ width: "130px" }}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="/"> How it works</Nav.Link>
              <Nav.Link className="text-white" href="/">Contact</Nav.Link>
              <Nav.Link className="text-white" href="/">Affliate program</Nav.Link>
              <Nav.Link className="text-white" href="/">FAQ</Nav.Link>
              <Nav.Link className="text-white" href="/">Blog</Nav.Link>
              <Nav.Link className="text-white" href="/">About Us</Nav.Link>

              <NavDropdown title="Order Tracker" id="collasible-nav-dropdown" className="text-white nav-color d-inline-block navitem navbar2">
                <div className="navitem navbar2" id="collasible-nav-dropdown" data-v-bc252f18="" data-v-2b84fbf9="" > <div data-v-bc252f18="" className=" swap-tracker app__swap-tracker swap-tracker_shadow"><div data-v-cc6e0960="" data-v-bc252f18="" class="swap-tracker-form"><form data-v-cc6e0960=""><label data-v-249899d1="" data-v-cc6e0960="" for="VJnwu5" class="form-input swap-tracker-form__input form-input_dark form-input_md"><span data-v-249899d1="" class="form-input__label"></span> <span data-v-249899d1="" class="form-input__wrapper"><input data-v-249899d1="" id="VJnwu5" spellcheck="false" max="Infinity" min="-Infinity" placeholder="Enter exchange ID" step="any" trim="true" type="text" autocomplete="off" lang="en" class="form-input__input" /></span></label> <button data-v-3411e120="" data-v-cc6e0960="" type="submit" class="button swap-tracker-form__button button_md button_primary button_uppercase button_rounded">
                  Track your swap
                </button></form></div></div></div>

              </NavDropdown>


            </Nav>
            <Nav className="ms-auto">
              <div
                style={{ margin: "auto", paddingTop: "10px", textAlign: "end" }}
                className="col-lg-2 col-md-2 col-sm-12">
                <Link to="">


                  <div>
                    <ReactFlagsSelect
                      selectedSize={18}
                      optionsSize={14}
                      fullWidth={false}
                      default="US"
                      showOptionLabel={true}
                      showSelectedLabel={false}
                      alignOptionsToRight={true}
                      selected={select}
                      onSelect={onSelect}
                      disabled={false}
                      countries={["US", "GB", "ES", "FR", "DE", "IT", "PT", "SE", "CN", "JP", "PK", "RU", "TR", "SA"]} 
                      customLabels={{ US: "EN-US", GB: "EN-GB", ES: "Español", FR: "Française", DE: "Deutch" , IT:"Italiana", PT:"Português", SE:"Svenska", CN:"中国人", JP:"日本", PK:"اردو", RU:"Pусский", TR:"Türk" , SA:"عربى" }}/>
                  </div>



                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbarr;
