import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Row, Card } from 'react-bootstrap';
import logoo from './mainlogo-removebg-preview.png'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import CryptoBuyExchange from "./CryptoBuyExchange";
import { useSelector } from 'react-redux';
import letsexchange from './images/letsexchange.png'
import CryptoBuyExchangee from "./CryptoBuyExchangee";


export default function Viewoffer() {
    //.................................................................... Redux..........................................................................

    //....................................................................Fetch Function..................................................................

    const [changenow_EEA, set_changenow_EEA] = useState("--")
    const [changenow_EET, set_changenow_EET] = useState("10-60 min")

    const [godex_EEA, set_godex_EEA] = useState("--")
    const [godex_EET, set_godex_EET] = useState("14-51 min")

    const [changehero_EEA, set_changehero_EEA] = useState("--")
    const [changehero_EET, set_changehero_EET] = useState("12-26 min")

    const [changelly_EEA, set_changelly_EEA] = useState("--")
    const [changelly_EET, set_changelly_EET] = useState("5-30 min")

    const [fixedfloat_EEA, set_fixedfloat_EEA] = useState("--")
    const [fixedfloat_EET, set_fixedfloat_EET] = useState("17-34 min")


    const [simpleswap_EEA, set_simpleswap_EEA] = useState("--")
    const [simpleswap_EET, set_simpleswap_EET] = useState("9-50 min")

    const [stealthio_EEA, set_stealthio_EEA] = useState("--")
    const [stealthio_EET, set_stealthio_EET] = useState("7-38 min")

    const [letsexchange_EEA, set_letsexchange_EEA] = useState("--")
    const [letsexchange_EET, set_letsexchange_EET] = useState("2-44 min")

    const [xolix_EEA, set_xolix_EEA] = useState("--")
    const [xolix_EET, set_xolix_EET] = useState("22-46 min")

    const getcur = useSelector(state => state.offer.getcur)
    const selcur = useSelector(state => state.offer.selcur)
    const amountcur = useSelector(state => state.offer.amountcur)
    console.log(selcur)
    console.log(getcur)
    console.log(amountcur)

    //................................................................Apis Call...........................................................................
    useEffect(async () => {

        console.log(selcur)
        console.log(getcur)
        console.log(amountcur)

        //Showing Offers from differet Api

        // Changenow EEA
        let resp2 = await fetch(`https://api.changenow.io/v1/exchange-amount/${amountcur}/${selcur}_${getcur}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let result2 = await resp2.json();
        console.log(result2)
        console.log(resp2)
        set_changenow_EEA(result2.estimatedAmount)

        // Changenow EET
        let resp3 = await fetch(`https://api.changenow.io/v1/exchange-amount/${amountcur}/${selcur}_${getcur}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let result3 = await resp3.json();
        set_changenow_EET(result3.transactionSpeedForecast + " " + "min")

        // Simpleswap EEA
        let resp4 = await fetch(`https://api.simpleswap.io/get_estimated?api_key=ae57f22d-7a23-4dbe-9881-624b2e147759&fixed=true&currency_from=${selcur}&currency_to=${getcur}&amount=${amountcur}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let result4 = await resp4.json();
        set_simpleswap_EEA(result4)
        console.log(result4)


        // Stealthio EEA
        let resp5 = await fetch(`https://api.stealthex.io/api/v2/estimate/${selcur}/${getcur}?amount=${amountcur}&api_key=6cbd846e-a085-4505-afeb-8fca0d650c58`, {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        let result5 = await resp5.json()
        set_stealthio_EEA(result5.estimated_amount)
        console.log(result5.estimated_amount)

        //Letsexchange EEA
        let req8_params = {
            from: selcur,
            to: getcur,
            amount: amountcur
        }
        let resp8 = await fetch(`https://api.letsexchange.io/api/v1/info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req8_params)
        })
        let result6 = await resp8.json()
        set_letsexchange_EEA(result6.amount)
        console.log(result6.amount)

        //Xolixs EEA
        let resp7 = await fetch(`https://exolix.com/api/v2/rate?coinFrom=${selcur}&coinTo=${getcur}&amount=${amountcur}&rateType=fixed`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let result7 = await resp7.json()
        set_xolix_EEA(result7.toAmount)
        console.log(result7.toAmount)

        //ChangeHero
        let req1_params = {
            jsonrpc: "2.0",
            method: "getExchangeAmount",
            params: {
                from: selcur,
                to: getcur,
                amount: amountcur
            }
        }
        let resp1 = await fetch(`https://api.changehero.io/v2/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'api-key': '46799cd819854116907d2a6f54926157'
            },
            body: JSON.stringify(req1_params)
        });
        let result1 = await resp1.json();
        set_changehero_EEA(result1.result)


        //Godex EEA
        let req9_params = {
            from: (selcur).toUpperCase(),
            to: (getcur).toUpperCase(),
            amount: amountcur
        }
        let resp9 = await fetch(`http://api.godex.io/api/v1/info`, {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req9_params)
        })
        let result9 = await resp9.json();
        set_letsexchange_EEA(result9.amount)
        console.log(result9)


        console.log("changeHero" + result1)

        //Fixed Float


        // .........................................................................................................................................................
    }, [])


    const src = "https://www.youtube.com/embed/watch?v=uQEMDjwc0P0&list=RDuQEMDjwc0P0&start_radio=1";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const aquaticCreatures = [
        { label: 'BNB', value: 'BNB' },
        { label: 'BTC', value: 'BTC' },
        { label: 'LTC', value: 'LTC' },
        { label: 'DOGE', value: 'DOGE' },
        { label: 'USDT', value: 'USDT' },
    ];
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-lg-5">
                        <p className="selectam">
                            1. Select a pair / Amount
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <p className="selectam">
                            2. Select Exchange
                        </p>
                    </div>
                </div>

                <Row>

                    <Col sm={12} lg={5} >
                        <div> <CryptoBuyExchangee /></div>

                        <div className='d-flex mt-3 mb-3' style={{ paddingTop: "325px" }}>
                            <div className="d-flex text-white">
                                <input style={{ width: "22px", height: "18px", marginRight: "8px", marginTop: "4px", }} type="checkbox" name="vehicle3" value="Boat" checked />
                                Fixed rate

                                <svg style={{ marginLeft: "8px", marginTop: "4px" }} data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path></svg>


                            </div>
                            <div className="d-flex ms-3 text-white">
                                <input style={{ width: "22px", height: "18px", marginRight: "8px", marginTop: "4px", color: "white" }} type="checkbox" name="vehicle3" value="Boat" checked />
                                Floating rate

                                <svg style={{ marginLeft: "8px", marginTop: "8px" }} data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>


                            </div>
                        </div>
                        <div className="text-white">
                            <p>Coinoswap provides you with exchange options from the swap services and exchanges we partner with. If our partners’ rules contain extra requirements, such as KYC procedure or floating rate, we obey them. Be careful and read the selected partner's terms before you start an exchange.</p>
                        </div>

                    </Col>
                    <Col sm={12} lg={7}>
                        <Tabs className="navs" defaultActiveKey="first">

                            <Tab className="navs1" eventKey="first" title="Sort by rate">
                                <div data-v-4860c0fa="">
                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2"></div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {changelly_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {changelly_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                </path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-4860c0fa="" className="step1-tag step1-table__tag step1-tag__top">
                                                    best rate
                                                </div>
                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>



                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="exolix" value="exolix" from-amount="0.1" to-amount="exolix" min="0.0021" max="0" code="btc" network="btc" align="start"><img data-v-2d10d984="" alt="exolix" src="https://storage.swapspace.co/static/exolox-icon.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Exolix
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {xolix_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.382947" path="1.382947" value="1.382947" align="start" has-icon=""><span data-v-5fc2260c="" className="step1-table-union__amount">
                                                            <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                <div data-v-abe58296="" className="help-hover">
                                                                    {xolix_EEA}
                                                                </div>

                                                            </div>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                </path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-4860c0fa="" className="step1-tag step1-table__tag step1-tag__top">
                                                    best rate
                                                </div>
                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>







                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="fixedfloat" value="fixedfloat" from-amount="0.1" to-amount="fixedfloat" min="0.00043843" max="3.09014606" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="fixedfloat" src="https://storage.swapspace.co/static/fixedfloat-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                FixedFloat
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {fixedfloat_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.3826667" path="1.3826667" value="1.3826667" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {fixedfloat_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                </path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-4860c0fa="" className="step1-tag step1-table__tag step1-tag__top">
                                                    best rate
                                                </div>
                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>









                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="changehero" value="changehero" from-amount="0.1" to-amount="changehero" min="0.001575" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changehero" src="https://storage.swapspace.co/static/changehero-icon.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                ChangeHero
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {changehero_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.38061439" path="1.38061439" value="1.38061439" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {changehero_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                </path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-4860c0fa="" className="step1-tag step1-table__tag step1-tag__top">
                                                    best rate
                                                </div>
                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>





                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="godex" value="godex" from-amount="0.1" to-amount="godex" min="0.00315" max="0" code="btc" network="btc" align="start">

                                                            <img data-v-2d10d984="" alt="godex" src="https://storage.swapspace.co/static/godex-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Godex
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {godex_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">

                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.37578061" path="1.37578061" value="1.37578061" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {godex_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-4671773e="" className="fixed-icon fixed-icon__start" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0.00315" max="0" code="btc" network="btc" has-icon="">
                                                            <svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon">
                                                                <path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white">
                                                                </path>
                                                            </svg>
                                                            <span data-v-4671773e="" className="step1-field__value_type step1-field__value_fixed">
                                                                Fixed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">

                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>



                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">






                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="simpleswap" value="simpleswap" from-amount="0.1" to-amount="simpleswap" min="0.00021594" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="simpleswap" src="https://storage.swapspace.co/static/SS_logo_icon_small.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                SimpleSwap
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {simpleswap_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.37396295" path="1.37396295" value="1.37396295" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {simpleswap_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.00021594" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">

                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>







                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">






                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="changenow" value="changenow" from-amount="0.1" to-amount="changenow" min="0.00016002" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changenow" src="https://storage.swapspace.co/static/changenow-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                ChangeNOW
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA

                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c"><div className="step1-field__value step1-table-union__eta">
                                                            {changenow_EET}
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.3734529" path="1.3734529" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {changenow_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.00021594" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">

                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>





                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="stealthex" value="stealthex" from-amount="0.1" to-amount="stealthex" min="0.00015081" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="stealthex" src="https://storage.swapspace.co/static/stealthex-icon.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                StealthEX
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">

                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {stealthio_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a=""
                                                    ><div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rate


                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="1.3651263" path="1.3651263" value="1.3651263" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        {stealthio_EEA}
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.00021594" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">

                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>



                                    <div data-v-4860c0fa="" className="step1-table__row">
                                        <div data-v-4860c0fa="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-4860c0fa="" className="row step1-table__desktop">





                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" className="partner-item" partner="quickex" value="quickex" from-amount="0.1" to-amount="quickex" min="0.105" max="114" code="btc" network="btc" align="start"><img data-v-2d10d984="" alt="Letsexchange" src={letsexchange} className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Letsexchange
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>

                                                        <div className="d-f ai-c">
                                                            <div className="step1-field__value step1-table-union__eta">
                                                                {letsexchange_EET}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">

                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">

                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-5fc2260c="" className="step1-table-union" partner="0" path="0" value="0" align="start" has-icon="">
                                                            <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                <span data-v-5fc2260c="" className="step1-table-union__extremum">
                                                                    <small data-v-5fc2260c="" className="step1-table-union__amount_prefix">

                                                                    </small>
                                                                    {letsexchange_EEA}
                                                                    <span data-v-5fc2260c="" className="step1-table-union__amount_code">

                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star">
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="8kmd0l" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="s9plpu" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8kmd0l)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fpd5zt" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="piqc5w" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fpd5zt)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" >
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="3non5b" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="htxl9y" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3non5b)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star"
                                                                            style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="fhx6u" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="jclt9" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#fhx6u)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="jo4s3f" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1">
                                                                                    </stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1">
                                                                                    </stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="y6e1il" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur">
                                                                                    </feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur">
                                                                                        </feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic">
                                                                                        </feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter">
                                                                                </polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#jo4s3f)">
                                                                                </polygon>
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.001028" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active">
                                                            </span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-4860c0fa="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-4860c0fa="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div className="d-f ai-c">
                                                            <p className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0.00021594" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path>
                                                            </svg>
                                                            <span data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>





                                            <div data-v-4860c0fa="" className="step1-table__mobile">

                                                <svg data-v-78e23fac="" data-v-4860c0fa="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className="">
                                                    </path>

                                                </svg>


                                                <div data-v-4860c0fa="" className="step1-table__field-container">
                                                    <div data-v-4860c0fa="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">

                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-4860c0fa="" className="d-f">
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-type ais-c top-rate">
                                                            <div data-v-68b0206a="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating">
                                                                    <path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-4860c0fa="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-5fc2260c="" className="step1-table-union" partner="1.38566392" path="1.38566392" value="1.38566392" align="center" has-icon="">
                                                                <span data-v-5fc2260c="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-5fc2260c="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38566392
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-4860c0fa="" className="step1-table__exchange">

                                                <button data-v-3411e120="" data-v-4860c0fa="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>



                                        </div>
                                    </div>




                                </div>
                            </Tab>
                            <Tab eventKey="second" title="Sort by ETA">
                                <div data-v-90fae824="">
                                    <div data-v-90fae824="" className="step1-table__row amount-enter-to">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="nexchange" value="nexchange" from-amount="0.1" to-amount="nexchange" min="0.00486011" max="95" code="btc" network="btc" is-new="true" align="start">
                                                            <img data-v-2d10d984="" alt="nexchange" src="https://storage.swapspace.co/static/favicon-180x180.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                n.exchange
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.38926169" path="1.38926169" value="1.38926169" is-new="true" align="start" has-icon="">
                                                            <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        1.38926169
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__new-eta">
                                                                <span data-v-eb2a8e68="">
                                                                    NEW
                                                                </span>
                                                                <div data-v-222986b4="" data-v-eb2a8e68="" className="help step1-field__help ml-1">
                                                                    <svg data-v-222986b4="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-question-circle fa-w-16 help__icon help__icon_white"><path data-v-222986b4="" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" className=""></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="nexchange" value="nexchange" from-amount="0.1" to-amount="nexchange" min="0.00486011" max="95" code="btc" network="btc" is-new="true" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <span data-v-0eeb5eb5="" data-v-3598d9f2="" className="new step1-table-rating__new">
                                                                    NEW
                                                                    <div data-v-222986b4="" data-v-0eeb5eb5="" className="help new__help">
                                                                        <svg data-v-222986b4="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-question-circle fa-w-16 help__icon help__icon_white">
                                                                            <path data-v-222986b4="" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" className=""></path>
                                                                        </svg>
                                                                    </div>
                                                                </span>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>







                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="1" path="1" from-amount="0.1" to-amount="1" min="0.00486011" max="95" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment-new indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment-new indicator-segmented__segment__active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment-new indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>







                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type top-rate" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__start" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0.00486011" max="95" code="btc" network="btc" is-new="true" has-icon=""><svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path></svg>
                                                            <span data-v-eb2a8e68="" data-v-4671773e="" className="step1-field__value_type step1-field__value_fixed">
                                                                Fixed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>



                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10"><path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path>
                                                </svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="nexchange" value="nexchange" from-amount="0.1" to-amount="nexchange" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="nexchange" src="https://storage.swapspace.co/static/favicon-180x180.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                n.exchange
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c top-rate step1-table__field-type-fixed">
                                                            <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__center" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0" max="0" code="btc" network="btc" has-icon=""><svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white">
                                                            </path>
                                                            </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate top-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.38926169" path="1.38926169" value="1.38926169" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38926169
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none top-rate-button">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>




                                    <div data-v-90fae824="" className="step1-table__row amount-enter-to">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">




                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="switchain" value="switchain" from-amount="0.1" to-amount="switchain" min="0.00651771" max="2.94848698" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="switchain" src="https://storage.swapspace.co/static/switchain-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Switchain
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.38447988" path="1.38447988" value="1.38447988" align="start" has-icon="">
                                                            <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        1.38447988
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>




                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta step1-table-union__eta_fastest">
                                                                3 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="switchain" value="switchain" from-amount="0.1" to-amount="switchain" min="0.00651771" max="2.94848698" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <span data-v-0eeb5eb5="" data-v-3598d9f2="" className="new step1-table-rating__new">
                                                                    NEW
                                                                    <div data-v-222986b4="" data-v-0eeb5eb5="" className="help new__help">
                                                                        <svg data-v-222986b4="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-question-circle fa-w-16 help__icon help__icon_white"><path data-v-222986b4="" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" className=""></path>
                                                                        </svg>
                                                                    </div>
                                                                </span>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret">
                                                                    <path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>









                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.00651771" max="2.94848698" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__start" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0.00651771" max="2.94848698" code="btc" network="btc" has-icon="">
                                                            <svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon">
                                                                <path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path>
                                                            </svg>
                                                            <span data-v-eb2a8e68="" data-v-4671773e="" className="step1-field__value_type step1-field__value_fixed">
                                                                Fixed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path>
                                                </svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="switchain" value="switchain" from-amount="0.1" to-amount="switchain" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="switchain" src="https://storage.swapspace.co/static/switchain-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Switchain
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c step1-table__field-type-fixed">
                                                            <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__center" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0" max="0" code="btc" network="btc" has-icon="">
                                                                <svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon">
                                                                    <path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.38447988" path="1.38447988" value="1.38447988" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.38447988
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-90fae824="" className="step1-tag step1-table__tag">
                                                    fastest
                                                </div>
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>





                                    <div data-v-90fae824="" className="step1-table__row">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">




                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="alfacash" value="alfacash" from-amount="0.1" to-amount="alfacash" min="0.00331628" max="0.29859551" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="alfacash" src="https://storage.swapspace.co/static/alfacash-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Alfacash
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.41400732" path="1.41400732" value="1.41400732" align="start" has-icon="">
                                                            <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        1.41400732
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta">
                                                                5-45 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="alfacash" value="alfacash" from-amount="0.1" to-amount="alfacash" min="0.00331628" max="0.29859551" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <span data-v-0eeb5eb5="" data-v-3598d9f2="" className="new step1-table-rating__new">
                                                                    NEW
                                                                    <div data-v-222986b4="" data-v-0eeb5eb5="" className="help new__help">
                                                                        <svg data-v-222986b4="" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-question-circle fa-w-16 help__icon help__icon_white"><path data-v-222986b4="" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" className=""></path></svg>
                                                                    </div>
                                                                </span>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>









                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="3" path="3" from-amount="0.1" to-amount="3" min="0.00331628" max="0.29859551" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_3_active"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__start" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0.00331628" max="0.29859551" code="btc" network="btc" has-icon=""><svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path></svg>
                                                            <span data-v-eb2a8e68="" data-v-4671773e="" className="step1-field__value_type step1-field__value_fixed">
                                                                Fixed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10">
                                                    <path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path>
                                                </svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="alfacash" value="alfacash" from-amount="0.1" to-amount="alfacash" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="alfacash" src="https://storage.swapspace.co/static/alfacash-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Alfacash
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c step1-table__field-type-fixed">
                                                            <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__center" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0" max="0" code="btc" network="btc" has-icon="">
                                                                <svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.41400732" path="1.41400732" value="1.41400732" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.41400732
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>







                                    <div data-v-90fae824="" className="step1-table__row">

                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">



                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="stealthex" value="stealthex" from-amount="0.1" to-amount="stealthex" min="0.00012884" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="stealthex" src="https://storage.swapspace.co/static/stealthex-icon.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                StealthEX
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.4026085" path="1.4026085" value="1.4026085" align="start" has-icon=""><span data-v-96cc460e="" className="step1-table-union__amount">
                                                            <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                <div data-v-abe58296="" className="help-hover">
                                                                    1.4026085
                                                                </div>
                                                            </div>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta">
                                                                7-38 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="stealthex" value="stealthex" from-amount="0.1" to-amount="stealthex" min="0.00012884" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                        <span data-v-fde73a0c="">
                                                                        </span>
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="cq829h" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop>
                                                                                </linearGradient>
                                                                                <filter data-v-ef4bc576="" id="v78i" height="130%" width="130%" filterUnits="userSpaceOnUse">
                                                                                    <feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur>
                                                                                    <feMerge data-v-ef4bc576="">
                                                                                        <feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode>
                                                                                        <feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode>
                                                                                    </feMerge>
                                                                                </filter>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#cq829h)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon>
                                                                                <polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#cq829h)"></polygon>
                                                                            </svg>
                                                                        </span>
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="yah9f" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="odqwdq" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#yah9f)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#yah9f)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="8ajaw" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="ujg8z" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8ajaw)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#8ajaw)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="3q3q5" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="kfakpd" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3q3q5)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#3q3q5)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="viwimo" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="50%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="50%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="q6cr8w" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#viwimo)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#viwimo)"></polygon></svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>









                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.00012884" max="0" code="btc" network="btc" align="start" has-icon=""><span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span><span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0.00012884" max="0" code="btc" network="btc" align="start" has-icon=""><svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            <span data-v-eb2a8e68="" data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10"><path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path></svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="stealthex" value="stealthex" from-amount="0.1" to-amount="stealthex" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="stealthex" src="https://storage.swapspace.co/static/stealthex-icon.png" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                StealthEX
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c">
                                                            <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon=""><svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.4026085" path="1.4026085" value="1.4026085" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.4026085
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>






                                    <div data-v-90fae824="" className="step1-table__row amount-enter-to">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">


                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.00099269" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.42552447" path="1.42552447" value="1.42552447" align="start" has-icon=""><span data-v-96cc460e="" className="step1-table-union__amount">
                                                            <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                <div data-v-abe58296="" className="help-hover">
                                                                    1.42552447
                                                                </div>
                                                            </div>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta">
                                                                8-18 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>










                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.00099269" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                        <span data-v-fde73a0c=""></span>
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="6eptdl" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="bbz90q" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#6eptdl)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#6eptdl)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="2hfgy" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="877csr" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#2hfgy)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#2hfgy)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="j50mw" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="4u0xh" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#j50mw)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#j50mw)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="m1j0nb" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="dqf3g" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#m1j0nb)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#m1j0nb)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="ppiyw" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="ewilpk" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#ppiyw)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#ppiyw)"></polygon></svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>









                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.00099269" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0.00099269" max="0" code="btc" network="btc" align="start" has-icon=""><svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            <span data-v-eb2a8e68="" data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10"><path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path></svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c">
                                                            <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon=""><svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.42552447" path="1.42552447" value="1.42552447" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.42552447
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <div data-v-76d55f6e="" data-v-90fae824="" className="step1-tag step1-table__tag">
                                                    best rate
                                                </div>
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>








                                    <div data-v-90fae824="" className="step1-table__row amount-enter-to">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">


                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.00330897" max="6.65" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.41837605" path="1.41837605" value="1.41837605" align="start" has-icon=""><span data-v-96cc460e="" className="step1-table-union__amount"><div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                            <div data-v-abe58296="" className="help-hover">
                                                                1.41837605
                                                            </div>
                                                        </div>
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>





                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta">
                                                                8-18 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0.00330897" max="6.65" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only"><span data-v-fde73a0c=""></span>
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="g24q6c" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="6fjsxb" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#g24q6c)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#g24q6c)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="o8p0v9" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="zuxp3m" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#o8p0v9)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#o8p0v9)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="yjx9sq" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="z6aiag" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#yjx9sq)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#yjx9sq)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="bg3uza" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="qmu1p" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#bg3uza)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#bg3uza)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="uxdze" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="hlqn2" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#uxdze)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#uxdze)"></polygon></svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>











                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.00330897" max="6.65" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__start" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0.00330897" max="6.65" code="btc" network="btc" has-icon=""><svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path>
                                                        </svg>
                                                            <span data-v-eb2a8e68="" data-v-4671773e="" className="step1-field__value_type step1-field__value_fixed">
                                                                Fixed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__mobile">
                                                <svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10"><path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path></svg>
                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changelly" value="changelly" from-amount="0.1" to-amount="changelly" min="0" max="0" code="btc" network="btc" align="center"><img data-v-2d10d984="" alt="changelly" src="https://storage.swapspace.co/static/changelly - sign.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                Changelly
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c step1-table__field-type-fixed">
                                                            <div data-v-4671773e="" data-v-eb2a8e68="" className="fixed-icon fixed-icon__center" partner="true" path="true" value="true" from-amount="0.1" to-amount="true" min="0" max="0" code="btc" network="btc" has-icon=""><svg data-v-4671773e="" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="fixed-icon__icon"><path data-v-4671773e="" d="M1.47481 6.65124C1.47481 5.69412 1.46701 4.76809 1.4787 3.84285C1.48338 3.48662 1.49352 3.12163 1.57069 2.77735C1.99087 0.896594 3.61856 -0.206359 5.58613 0.0327201C7.19978 0.228765 8.5102 1.80908 8.52033 3.57907C8.52579 4.58559 8.52111 5.59212 8.52111 6.65124C8.7768 6.65124 9.00599 6.64407 9.2344 6.65283C9.74344 6.67276 9.99679 6.93415 9.99757 7.45375C10.0007 10.0422 10.0007 12.6314 9.99757 15.2198C9.99679 15.7163 9.74344 15.9945 9.25934 15.9961C6.41556 16.0032 3.57178 16.0032 0.728003 15.9961C0.256378 15.9953 0.00458543 15.7291 0.00380589 15.2509C-0.00165093 12.6354 -0.000871382 10.0207 0.00380589 7.40513C0.00458543 6.93335 0.262615 6.67754 0.731121 6.65443C0.961866 6.64167 1.19417 6.65124 1.47481 6.65124ZM8.58659 8.09209C6.16845 8.09209 3.79551 8.09209 1.40932 8.09209C1.39685 8.18692 1.37736 8.26343 1.37736 8.34073C1.3758 10.3187 1.38204 12.2975 1.36957 14.2755C1.36723 14.5974 1.52782 14.5998 1.75778 14.5998C3.914 14.5951 6.06944 14.5974 8.22566 14.5958C8.33948 14.5958 8.45329 14.5823 8.58737 14.5743C8.58659 12.4059 8.58659 10.2629 8.58659 8.09209ZM7.13352 6.63928C7.13352 5.61124 7.1343 4.61906 7.13352 3.62688C7.13196 2.38447 6.20664 1.41141 5.01706 1.39707C3.82513 1.38272 2.85226 2.38048 2.84836 3.62529C2.84525 4.50032 2.84836 5.37615 2.84836 6.25118C2.84836 6.37709 2.84836 6.50301 2.84836 6.63849C4.29754 6.63928 5.68357 6.63928 7.13352 6.63928Z" fill="white"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.41837605" path="1.41837605" value="1.41837605" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.41837605
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>






                                    <div data-v-90fae824="" className="step1-table__row">
                                        <div data-v-90fae824="" className="d-f">
                                            <div data-v-a46bbb88="" data-v-90fae824="" className="row step1-table__desktop">



                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Partner
                                                            </p>
                                                        </div>
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changenow" value="changenow" from-amount="0.1" to-amount="changenow" min="0.00012894" max="0" code="btc" network="btc" align="start">
                                                            <img data-v-2d10d984="" alt="changenow" src="https://storage.swapspace.co/static/changenow-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                ChangeNOW
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>






                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.4111632" path="1.4111632" value="1.4111632" align="start" has-icon="">
                                                            <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                    <div data-v-abe58296="" className="help-hover">
                                                                        1.4111632
                                                                    </div>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>








                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                ETA
                                                            </p>
                                                        </div>
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <div data-v-eb2a8e68="" className="step1-field__value step1-table-union__eta">
                                                                8-18 min
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>








                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Rating
                                                            </p>
                                                        </div>
                                                        <div data-v-3598d9f2="" data-v-eb2a8e68="" className="step1-table-rating" path="changenow" value="changenow" from-amount="0.1" to-amount="changenow" min="0.00012894" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <div data-v-3598d9f2="" className="step1-table-rating__container">
                                                                <div data-v-fde73a0c="" data-v-3598d9f2="" className="mb-1 vue-star-rating">
                                                                    <div data-v-fde73a0c="" className="sr-only">
                                                                        <span data-v-fde73a0c=""></span>
                                                                    </div>
                                                                    <div data-v-fde73a0c="" className="vue-star-rating">
                                                                        <span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50">
                                                                                <linearGradient data-v-ef4bc576="" id="rf0rr5" x1="0" x2="100%" y1="0" y2="0">
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop>
                                                                                    <stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient>
                                                                                <filter data-v-ef4bc576="" id="px9gz" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#rf0rr5)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#rf0rr5)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="qd2oqo" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="sxujgt" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#qd2oqo)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#qd2oqo)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="ut19y" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="igg7q" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#ut19y)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#ut19y)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="y4b8cq" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="100%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="100%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="91wf9s" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#y4b8cq)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#y4b8cq)"></polygon></svg></span><span data-v-fde73a0c="" className="vue-star-rating-star" style={{ marginRight: "7px" }}>
                                                                            <svg data-v-ef4bc576="" data-v-fde73a0c="" height="16" width="16" viewBox="0 0 16 16" className="vue-star-rating-star" step="50"><linearGradient data-v-ef4bc576="" id="wotaxr" x1="0" x2="100%" y1="0" y2="0"><stop data-v-ef4bc576="" offset="50%" stopColor="#fbff5c" stopOpacity="1"></stop><stop data-v-ef4bc576="" offset="50%" stopColor="#36293B" stopOpacity="1"></stop></linearGradient><filter data-v-ef4bc576="" id="mc2f58" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-ef4bc576="" stdDeviation="0" result="coloredBlur"></feGaussianBlur><feMerge data-v-ef4bc576=""><feMergeNode data-v-ef4bc576="" in="coloredBlur"></feMergeNode><feMergeNode data-v-ef4bc576="" in="SourceGraphic"></feMergeNode></feMerge></filter><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#wotaxr)" stroke="transparent" strokeWidth="0" strokeLinejoin="miter"></polygon><polygon data-v-ef4bc576="" points="7.2727272727272725,0.8080808080808081,2.424242424242424,16,14.545454545454545,6.303030303030303,0,6.303030303030303,12.121212121212121,16" fill="url(#wotaxr)"></polygon></svg>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <svg data-v-d840b528="" data-v-3598d9f2="" width="8" height="13" viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg" className="icon-caret step1-table-rating__caret"><path data-v-d840b528="" d="M1 1L7 6.5L1 12" stroke="#6B4D68" strokeWidth="2"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>











                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Support Rate
                                                            </p>
                                                        </div>
                                                        <div data-v-66620ee0="" data-v-eb2a8e68="" className="indicator-segmented step1-field__support" partner="2" path="2" from-amount="0.1" to-amount="2" min="0.00012894" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_1_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment_2_active"></span>
                                                            <span data-v-66620ee0="" className="indicator-segmented__segment indicator-segmented__segment__active"></span>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div data-v-49591a1a="" data-v-90fae824="" className="column col-12 col-md-4 col-lg-4" data-v-a46bbb88="">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type" data-v-49591a1a="">
                                                        <div data-v-eb2a8e68="" className="d-f ai-c">
                                                            <p data-v-eb2a8e68="" className="step1-field__label">
                                                                Type
                                                            </p>
                                                        </div>
                                                        <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0.00012894" max="0" code="btc" network="btc" align="start" has-icon="">
                                                            <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            <span data-v-eb2a8e68="" data-v-68b0206a="" className="step1-field__value_type">
                                                                Floating
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div data-v-90fae824="" className="step1-table__mobile"><svg data-v-78e23fac="" data-v-90fae824="" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="step1-table__caret mr-3 ml-3 svg-inline--fa fa-caret-down fa-w-10"><path data-v-78e23fac="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path></svg>





                                                <div data-v-90fae824="" className="step1-table__field-container">
                                                    <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field mb-2">
                                                        <div data-v-2d10d984="" data-v-eb2a8e68="" className="partner-item" partner="changenow" value="changenow" from-amount="0.1" to-amount="changenow" min="0" max="0" code="btc" network="btc" align="center">
                                                            <img data-v-2d10d984="" alt="changenow" src="https://storage.swapspace.co/static/changenow-icon.svg" className="partner-item__image" />
                                                            <span data-v-2d10d984="">
                                                                ChangeNOW
                                                            </span>
                                                            <div data-v-2d10d984="" className="partner-item__icon-container ml-2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-v-90fae824="" className="d-f">
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-type ais-c">
                                                            <div data-v-68b0206a="" data-v-eb2a8e68="" className="d-fsc" from-amount="0.1" min="0" max="0" code="btc" network="btc" align="center" has-icon="">
                                                                <svg data-v-68b0206a="" width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-floating"><path data-v-68b0206a="" d="M14.5419 8.00076C13.1739 8.00076 11.8069 7.36573 10.7653 6.09449L8.62364 3.48055C7.25281 1.80744 5.02184 1.80744 3.651 3.48055L1.55731 6.03591C1.20116 6.47059 0.62422 6.47059 0.267111 6.03591C-0.0890372 5.60123 -0.0890372 4.89589 0.267111 4.46121L2.3608 1.90585C4.44298 -0.635447 7.83167 -0.635447 9.91288 1.90585L12.0546 4.5198C13.4254 6.19291 15.6564 6.19291 17.0272 4.5198L18.4422 2.79279C18.7984 2.35811 19.3753 2.35811 19.7324 2.79279C20.0886 3.22747 20.0886 3.93163 19.7324 4.36748L18.3174 6.09449C17.2768 7.36573 15.9098 8.00076 14.5419 8.00076Z" fill="white"></path></svg>
                                                            </div>
                                                        </div>
                                                        <div data-v-eb2a8e68="" data-v-90fae824="" className="step1-field step1-table__field-rate">
                                                            <div data-v-96cc460e="" data-v-eb2a8e68="" className="step1-table-union" partner="1.4111632" path="1.4111632" value="1.4111632" align="center" has-icon="">
                                                                <span data-v-96cc460e="" className="step1-table-union__amount">
                                                                    <div data-v-abe58296="" data-v-96cc460e="" className="help-hover">
                                                                        <div data-v-abe58296="" className="help-hover">
                                                                            1.4111632
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-90fae824="" className="step1-table__exchange">
                                                <button data-v-588063de="" data-v-90fae824="" type="button" className="button step1-table__button button_sm button_primary button_none">
                                                    Exchange
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="third" title="Sort by Rating">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
