import React from 'react'
import { Tabs,Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select'


function CardABS() {
  return (
     <div className="card"> 
    <Tabs defaultActiveKey="first">
    {/* ///////////Tab1 Exchange Crypto//////////////////////// */}
      {/* <ExchangeCrypto  data={data}/> */}
    {/* ///////////Tab2 Buy Crypto///////////////////////////// */}
    {/* <Tab eventKey="second" title="Buy Crypto">
        <div className="selectCurrencies_wrap__2siQU">
          <h6 className="color-white margin-top-bottom-10">You send</h6>
          <div className="selectCurrencies_field__2L8dK">
            <div className="selectCurrencies_wrapInput__2ztNM">
              <input className="selectCurrencies_input__334rp selectCurrencies_inputAmount__1iOgg" type="number"  value={val2}  onChange={handleBuyChange}/>
            </div>
            <Select
              placeholder={sel11}
            
              options={data}
              value={sel11}
              onChange={async (e)=>
                {
                  let {label}=e;
                  setSel11(label)
                  
                  let result = await fetch(`https://api.changenow.io/v1/min-amount/${label}_${sel22}?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });

                  result = await result.json();
                  setMin(result.minAmount);
                  setVal2(result.minAmount);
                }
               
              }

            />

          </div>

        </div>
        <div className="selectCurrencies_wrap__2siQU">
          <h6 className="color-white margin-top-bottom-10">You get</h6>
          <div className="selectCurrencies_field__2L8dK">
            <div className="selectCurrencies_wrapInput__2ztNM">
              <input className="selectCurrencies_input__334rp selectCurrencies_inputAmount__1iOgg" type="text" value={reVal2} />
            </div>
            <Select
              placeholder={sel22}
            
              options={data}
              value={sel22}
              onChange={(e)=>
                {
                  let {label}=e;
                  setSel22(label)

                }
               
              }

            />

          </div>

        </div>
        <Link to="/viewoffer" className="nav-margin nav-color">
          <button data-v-0d5f4489="" data-v-5a319364="" type="button" className="  button index-rates__next button_lg button_primary button_uppercase" id="widget_upper">
            View offers
          </button>
        </Link>
      </Tab> */}
    </Tabs>
 </div>
  )
}

export default CardABS