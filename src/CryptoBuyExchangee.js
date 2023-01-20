import React, { useEffect, useRef, useState } from "react";
import currency from "./crun";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { set_init_get_currency, set_selcur, set_getcur, set_amountcur } from './features/offerSlice.js'
import { useSelector } from 'react-redux';


function CryptoBuyExchangee(props) {

  const getcur = useSelector(state => state.offer.getcur)
  const selcur = useSelector(state => state.offer.selcur)
  const amountcur = useSelector(state => state.offer.amountcur)

  // .....................................................................Redux....................................................................................
  const dispatch = useDispatch()
  const init_get_currency = useSelector(state => state.offer.init_get_currency)

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
  const [getval, setgval] = useState(0.1);
  const [load, setload] = useState(false);
  const [cr, setcr] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [filtered1, setfiltered1] = useState([]);
  const [searchv, setsearch] = useState();
  const [searchv1, setsearch1] = useState();

  const cur = filtered.length > 0 ? filtered : cr;
  const cur1 = filtered1.length > 0 ? filtered1 : cr;



  const handleSearchChange = (e) => {
    setsearch(e.target.value);
    let filtsearch = cr.filter((x) =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (filtsearch.length > 0) {
      setfiltered(filtsearch);
    } else {
      setfiltered([]);
    }
  };

  const handleSearchChange1 = (e) => {
    setsearch1(e.target.value);
    let filtsearch = cr.filter((x) =>
      x.name.toLowerCase().includes(e.target.value.toLowerCase())
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

      // .............................................................Minimum Deposit Value...................................................................................
      //  let resp1 = await fetch(`https://api.changenow.io/v1/exchange-range/${cur[exchangesenddata]?.symbol}_${cur[exchangegetdata]?.symbol}?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
      // let result1 = await resp1.json();
      // if (e.target.value < result1.minAmount) {
      //   let cap = sel1.toUpperCase()
      //   setCheck1("Minimum " + cap + " " + result1.minAmount)
      // }
      // else {
      //   setCheck1(null)
      // }
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
      console.log(data.estimatedAmount + "I am second")
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
  }, []);

  return (
    <div className="formContainer1">
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
          <div className="label">
            <span>You send</span>
          </div>
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
          <div className="label">
            <p>You get</p>
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
          <div className="label">
            <span>You send</span>
          </div>
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

          <div className="label">
            <span>You get</span>
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
      
    </div>
  );
}

export default CryptoBuyExchangee
