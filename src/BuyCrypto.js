import React, {useState} from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';

function BuyCrypto({data}) {
  let [val2,setVal2]=useState(27);
  let [sel11,setSel11]=useState("usdd")
  let [sel22,setSel22]=useState("btc");
  let [reVal2,setReVal2]=useState(0.00165267)
  let [min,setMin]=useState(27);

    const handleBuyChange=async (e)=>{
    setVal2(e.target.value);
    // if(val2>e.target.value)
    // {alert(`Minimum Amount should be : ${min}`)}
    if(sel11==sel22)
    {
      setReVal2(e.target.value)
    }
    else{
      let result = await fetch(`https://api.changenow.io/v1/exchange-amount/${e.target.value}/${sel11}_${sel22}/?api_key=3016eb278f481714c943980dec2bfc595f8a2160e8eabd0228dc02cc627a184c`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    setReVal2(result.estimatedAmount)
  }
  }

  return (
   <>
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
      <text style={{color:"red"}}>Minimum amount: {min}</text>

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
   </>
  
  )
}

export default BuyCrypto