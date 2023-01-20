import React, { useEffect, useRef, useState } from "react";
import currency from "./crun";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { set_init_get_currency, set_selcur, set_getcur, set_amountcur } from './features/offerSlice.js'
import { useSelector } from 'react-redux';


function ExchangeCrypto(props) {

  // .....................................................................Redux....................................................................................
  const dispatch = useDispatch()
  const init_get_currency = useSelector(state => state.offer.init_get_currency)
  const selcur = useSelector(state => state.offer.selcur)
  const getcur = useSelector(state => state.offer.getcur)
  const amountcur = useSelector(state => state.offer.amountcur)


  // .............................................................useState Hook....................................................................................
  const [exc, setexc] = useState(true);
  const [bc, setbc] = useState(false);
  const [showexchangesenddrop, setshowexchangesenddrop] = useState(false);
  const [showexchangegetdrop, setshowexchangegetdrop] = useState(false);
  const [showbuysenddrop, setshowbuysenddrop] = useState(false);
  const [showbuygetdrop, setshowbuygetdrop] = useState(false);
  const [exchangesenddata, setexchangesenddata] = useState(0);
  const [exchangegetdata, setexchangegetdata] = useState(init_get_currency);
  const [buysenddata, setbuysenddata] = useState(0);
  const [buygetdata, setbuygetdata] = useState(0);
  const [err, setmsg] = useState("");
  const [sval, setsval] = useState(0.1);
  const [getval, setgval] = useState();
  const [load, setload] = useState(false);
  const [cr, setcr] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [filtered1, setfiltered1] = useState([]);
  const [searchv, setsearch] = useState();
  const [searchv1, setsearch1] = useState();

  const cur = filtered.length > 0 ? filtered : cr;
  const cur1 = filtered1.length > 0 ? filtered1 : cr;

  const initialValue = async () => {
    console.log("I am called")
    const { data } = await axios
    .get(
      `https://api.changenow.io/v1/exchange-amount/0.1/btc_eth/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`
    )
    .catch((er) => setmsg(er.response.data.message));
    setgval(data.estimatedAmount)
  }

  const changeInput = () => {
    var exchange = null
    //swap variables
    exchange = exchangesenddata;
    setexchangesenddata(exchangegetdata)
    setexchangegetdata(exchange)
  }

  const handleSearchChange = (e) => {
    setsearch(e.target.value);
    let filtsearch = cr.filter((x) =>
      x.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (filtsearch.length > 0) {
      setfiltered(filtsearch);
      console.log(cr)
    } else {
      setfiltered([]);
    }
  };


  const handleSearchChange1 = (e) => {
    setsearch1(e.target.value);
    let filtsearch = cr.filter((x) =>
      x.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (filtsearch.length > 0) {
      setfiltered1(filtsearch);
    } else {
      setfiltered1([]);
    }
  };

  const handleClickOutside = (e) => {
    const cn = e.target.className;
    console.log(cn);
    if (
      cn === "searchbar" ||
      cn === "search" ||
      cn === "dropdata" ||
      cn === "usym" ||
      cn === "sym" ||
      cn === "dd"
    ) {
      console.log("in");
    } else {
      setshowexchangesenddrop(false);
      setshowexchangegetdrop(false);
      setshowbuysenddrop(false);
      setshowbuygetdrop(false);
      setfiltered([]);
      setfiltered1([]);
      setsearch("");
      setsearch1("");
    }
  };

  const getCryptodata = async () => {
    const { data } = await axios.get(
      "https://api.changenow.io/v1/currencies?active=true"
    );
    if (data) {
      setcr(
        data.map((coin) => {
          return { symbol: coin.ticker, name: coin.name, image: coin.image };
        })
      );
    }
  };

  const handleExchange = async (e) => {
    setload(true);
    const { data } = await axios
      .get(
        `https://api.changenow.io/v1/exchange-amount/${e}/${cur[exchangesenddata]?.symbol}_${cur[exchangegetdata]?.symbol}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`
      )
      .catch((er) => setmsg(er.response.data.message));
    if (data.estimatedAmount) {
      //................................................................Storing SELL GET AMOUNT inputs in Redux...................................................
      dispatch(set_selcur(cur[exchangesenddata]?.symbol))
      dispatch(set_getcur(cur[exchangegetdata]?.symbol))
      dispatch(set_amountcur(e))
      //.........................................................................................................................................................
      console.log(data.estimatedAmount)
      setgval(data.estimatedAmount);
      setload(false);
    }
    setload(false);

  };

  const handleExchangedrop = async (s1, s2) => {
    setload(true);
    const { data } = await axios
      .get(
        `https://api.changenow.io/v1/exchange-amount/${sval}/${s1}_${s2}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`
      )
      .catch((er) => setmsg(er.response.data.message));
    if (data.estimatedAmount) {
      setgval(data.estimatedAmount);
      setload(false);
      //................................................................Storing SELL GET AMOUNT inputs in Redux...................................................
      dispatch(set_selcur(cur[exchangesenddata]?.symbol))
      dispatch(set_getcur(cur[exchangegetdata]?.symbol))
      dispatch(set_amountcur(e))
    }
    setload(false);
  };

  useEffect(() => {
    getCryptodata();
    document.addEventListener("click", handleClickOutside, true);
    initialValue()
  },[]);

  return (
    <div className="formContainer">
      <div className="tabs">
        <span
          onClick={() => {
            setexc(true);
            setbc(false);
          }}
          style={{
            borderBottom: exc ? "1px solid #fff" : "1px solid #6b4d68",
            color: exc ? "white" : "#6b4d68",
          }}
        >
          Exchange Crypto
        </span>
        <span
          onClick={() => {
            setexc(false);
            setbc(true);
          }}
          style={{
            borderBottom: bc ? "1px solid #fff" : "1px solid #6b4d68",
            color: bc ? "white" : "#6b4d68",
          }}
        >
          Buy Crypto
        </span>
      </div>
      {exc ? (
        <>

          <div className="inp">
            {err ? (
              <p style={{ color: "red", fontSize: 10, position: "absolute" }}>
                {err}
              </p>
            ) : null}
            {!showexchangesenddrop ? (
              <>
                <input
                  type="text"
                  className="in"
                  value={sval}
                  min={0.1}
                  onChange={(e) => {
                    setsval(e.target.value);
                    handleExchange(e.target.value);
                  }}
                />

                <div
                  className="options"
                  onClick={() => setshowexchangesenddrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur[exchangesenddata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur[exchangesenddata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv}
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {cur?.map((x, index) => (
                    <div
                      style={{
                        paddingLeft: 5,
                        height: 45,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 4,
                      }}
                      data-id={index}
                      onClick={(e) => {
                        setexchangesenddata(index);
                        setshowexchangesenddrop(false);
                        handleExchangedrop(
                          cur[index]?.symbol,
                          cur[exchangegetdata]?.symbol
                        );
                      }}
                      className="dd"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 27,
                          width: 27,
                          background: "rgba(255, 255, 255, 0.209)",
                          borderRadius: 5,
                        }}
                        className="usym"
                      >
                        <img
                          src={`${x?.image}`}
                          alt="c"
                          style={{ height: 17, width: 17 }}
                        />
                      </span>
                      <span
                        data-id={index}
                        className="sym"
                        style={{
                          width: "90%",
                          fontSize: 13,
                          lineHeightStep: 0.2,
                          lineHeight: 1.2,
                        }}
                      >
                        {" "}
                        {x?.name}
                        <br />
                        <span
                          style={{
                            fontSize: 10,
                            color: "rgba(255, 255, 255, 0.209)",
                          }}
                        >
                          {x?.symbol.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="row">
            <div className="col-8">
              <li style={{ fontSize: " 12px", color: "grey" }} className=" ms-2 mt-2">No extra fees</li>
              <li style={{ fontSize: " 12px", color: "grey" }} className="mb-3 ms-2">Estimated :<span> {sval} {cur[exchangesenddata]?.symbol.toUpperCase()} ~ {getval} {cur[exchangegetdata]?.symbol.toUpperCase()} </span></li>
            </div>
            <div className="col-4 m-auto">
              <button className="ms-auto new-stepper-button-swap new-stepper-button-swap_dark" type="button" onClick={changeInput}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z" fill="#00C26F"></path><path d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z" fill="#00C26F"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="inp">
            {!showexchangegetdrop ? (
              <>
                {load ? (
                  <div className="in" style={{ padding: 14 }}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  <input
                    type="text"
                    className="in"
                    value={getval}
                    style={{ color: "#6b4d68" }}
                    disabled
                  />
                )}
                <div
                  className="options"
                  onClick={() => setshowexchangegetdrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur1[exchangegetdata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur1[exchangegetdata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv1}
                    onChange={(e) => handleSearchChange1(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {cur1?.map((x, index) => (
                    <div
                      style={{
                        paddingLeft: 5,
                        height: 45,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 4,
                      }}
                      data-id={index}
                      onClick={(e) => {
                        setexchangegetdata(index);
                        setshowexchangegetdrop(false);
                        handleExchangedrop(
                          cur1[exchangesenddata]?.symbol,
                          cur1[index]?.symbol
                        );
                      }}
                      className="dd"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 27,
                          width: 27,
                          background: "rgba(255, 255, 255, 0.209)",
                          borderRadius: 5,
                        }}
                        className="usym"
                      >
                        <img
                          src={`${x?.image}`}
                          alt="c"
                          style={{ height: 17, width: 17 }}
                        />
                      </span>
                      <span
                        data-id={index}
                        className="sym"
                        style={{
                          width: "90%",
                          fontSize: 13,
                          lineHeightStep: 0.2,
                          lineHeight: 1.2,
                        }}
                      >
                        {" "}
                        {x?.name}
                        <br />
                        <span
                          style={{
                            fontSize: 10,
                            color: "rgba(255, 255, 255, 0.209)",
                          }}
                        >
                          {x?.symbol.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>

          <div className="inp">
            {!showbuysenddrop ? (
              <>
                <input type="text" className="in" value={1000} />
                <div
                  className="options"
                  onClick={() => setshowbuysenddrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      {currency[buysenddata].symbol}
                    </span>
                    <span className="symbol">{currency[buysenddata].code}</span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input type="text" className="search" />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {currency.map((x, index) => (
                    <div
                      style={{ paddingLeft: 20 }}
                      data-id={index}
                      onClick={(e) => {
                        setbuysenddata(index);
                        setshowbuysenddrop(false);
                      }}
                    >
                      {/* <span style={{ paddingRight: 10, width: 20 }}>
                        {x.symbol}
                      </span> */}
                      <span className="sym"> {x.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-8">
              <li style={{ fontSize: " 12px", color: "grey" }} className=" ms-2 mt-2">No extra fees</li>
              <li style={{ fontSize: " 12px", color: "grey" }} className="mb-3 ms-2">Estimated :<span>1 BTC ~ 13.25 ETH </span></li>
            </div>
            <div className="col-4 m-auto">
              <button className="ms-auto new-stepper-button-swap new-stepper-button-swap_dark" type="button">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z" fill="#00C26F"></path><path d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z" fill="#00C26F"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="inp">
            {!showbuygetdrop ? (
              <>
                <input
                  type="text"
                  className="in"
                  value={0.12489}
                  style={{ color: "#6b4d68" }}
                />
                <div
                  className="options"
                  onClick={() => setshowbuygetdrop(true)}
                >
                  <span>
                    <span className="unisymbol">
                      <img
                        src={`${cur[buygetdata]?.image}`}
                        alt="c"
                        style={{ height: 20, width: 20, marginBottom: 5 }}
                      />
                    </span>
                    <span className="symbol">
                      {cur[buygetdata]?.symbol.toUpperCase()}
                    </span>
                  </span>
                  <span className="ch">
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
              </>
            ) : (
              <div className="dropSearch">
                <div className="searchbar">
                  <input
                    type="text"
                    className="search"
                    value={searchv}
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <i className="fa-solid fa-search"></i>
                </div>
                <div className="dropdata">
                  {cur?.map((x, index) => (
                    <div
                      style={{
                        paddingLeft: 5,
                        height: 45,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 4,
                      }}
                      data-id={index}
                      onClick={(e) => {
                        setbuygetdata(index);
                        setshowbuygetdrop(false);
                      }}
                      className="dd"
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 27,
                          width: 27,
                          background: "rgba(255, 255, 255, 0.209)",
                          borderRadius: 5,
                        }}
                        className="usym"
                      >
                        <img
                          src={`${x?.image}`}
                          alt="c"
                          style={{ height: 17, width: 17 }}
                        />
                      </span>
                      <span
                        data-id={index}
                        className="sym"
                        style={{
                          width: "90%",
                          fontSize: 13,
                          lineHeightStep: 0.2,
                          lineHeight: 1.2,
                        }}
                      >
                        {" "}
                        {x?.name}
                        <br />
                        <span
                          style={{
                            fontSize: 10,
                            color: "rgba(255, 255, 255, 0.209)",
                          }}
                        >
                          {x?.symbol.toUpperCase()}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <Link to="/viewoffer" className="nav-margin nav-color">
        <div className="offerbtn">
          <span>VIEW OFFERS</span>
        </div>
      </Link>
    </div>
  );
}

export default ExchangeCrypto
