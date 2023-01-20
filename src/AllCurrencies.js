import React from 'react'
import btc from "../src/icon/btc.png";
import c2 from "../src/icon/c2.png";
import tether from "../src/icon/tether.png";
import trindle from "../src/icon/trindle.png";
import doge from "../src/icon/doge.png";
import cardano from "../src/icon/cardano.png";
import dot from "../src/icon/dot.png";
import ltc from "../src/icon/ltc.png";
import sol from "../src/icon/sol.png";
import luna from "../src/icon/luna.png";
import link from "../src/icon/link.png";
import etc from "../src/icon/etc.png";
import bch from "../src/icon/bch.png";
import thetha from "../src/icon/thetha.png";
import hbar from "../src/icon/hbar.png";
import pankcake from "../src/icon/pankcake.png";
import grt from "../src/icon/grt.png";
import nexo from "../src/icon/nexo.png";
import tfeul from "../src/icon/tfeul.png";
import dash from "../src/icon/dash.png";

// const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
// const navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
// const navbarDataFilter = (value) => {
//     return navbarData.filter((item) => {
//         return item.toLowerCase().startsWith(value.toLowerCase());
//     });
// };

// new mdb.Autocomplete(navbarAutocomplete, {
//     filter: navbarDataFilter,
// });
export default function AllCurrencies() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-xs-12'>
                        <h1 className='text-white'>Cryptocurrency Prices</h1>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 col-xs-12'>

                        <form className='pt-2' action="/action_page.php">
                            <div class="input-group" style={{ width: "65%", marginLeft: 'auto' }}>
                                <input style={{ borderRadius: "6px", background: "#2A2F34", height: "45px" }} type="text" class="form-control" placeholder=" Type to Search..." name="search" />
                                <div class="input-group-btn">
                                    <button style={{ position: "relative", right: "39px", top: "4px" }} class="btn btn-default" type="submit">
                                        <i class="fas fa-search "></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <table class="table table-hover mt-3 table-responsiveness table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Coin (A-Z)</th>
                            <th scope="col">prize</th>
                            <th scope="col">24h</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">24h Volume</th>
                            <th scope="col">Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={btc} />
                                    <h6 className='mt-1'>BTC</h6>
                                </div>
                            </td>
                            <td>$16819.089</td>
                            <td className='red'>-0.258%</td>
                            <td>$323814130282.135</td>
                            <td>$6017235025.537</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={c2} />
                                    <h6 className='mt-1'>ETH</h6>
                                </div>
                            </td>
                            <td>$1251.021</td>
                            <td className='green'>+0.080%</td>
                            <td>$153092252189.533</td>
                            <td>$2550326552.319</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={tether} />
                                    <h6 className='mt-1'>USDT (ERC20)</h6>
                                </div>
                            </td>
                            <td>$1.000</td>
                            <td className='green'>+0.024%</td>
                            <td>$66248439012.916</td>
                            <td>$9571123949.382</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={trindle} />
                                    <h6 className='mt-1'>BNB</h6>
                                </div>
                            </td>
                            <td>$257.825</td>
                            <td className='green'>+1.217%</td>
                            <td>$43005492003.583</td>
                            <td>$145647978.399</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={doge} />
                                    <h6 className='mt-1'>DOGE</h6>
                                </div>
                            </td>
                            <td>$0.074</td>
                            <td className='green'>+2.312%</td>
                            <td>$9837090953.093</td>
                            <td>$185024776.008</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={cardano} />
                                    <h6 className='mt-1'>ADA Cardano</h6>
                                </div>
                            </td>
                            <td>$0.267</td>
                            <td className='red'>-0.399%</td>
                            <td>$9117797648.059</td>
                            <td>$91322162.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={dot} />
                                    <h6 className='mt-1'>DOT</h6>
                                </div>
                            </td>
                            <td>$4.557</td>
                            <td className='green'>+0.399%</td>
                            <td>$9118898648.059</td>
                            <td>$96529062.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={ltc} />
                                    <h6 className='mt-1'>LTC</h6>
                                </div>
                            </td>
                            <td>$4.997</td>
                            <td className='green'>+0.769%</td>
                            <td>$9658894348.059</td>
                            <td>$96459092.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={sol} />
                                    <h6 className='mt-1'>SOL</h6>
                                </div>
                            </td>
                            <td>$4.097</td>
                            <td className='red'>-0.864%</td>
                            <td>$4558674348.059</td>
                            <td>$95298092.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={luna} />
                                    <h6 className='mt-1'>LUNA</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.879%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">11</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" className='mr-2 currencies' wi src={link} />
                                    <h6 className='mt-1'>LINK</h6>
                                </div>
                            </td>
                            <td>$4.097</td>
                            <td className='red'>-0.649%</td>
                            <td>$4558674348.059</td>
                            <td>$95298092.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">12</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={etc} />
                                    <h6 className='mt-1'>ETC</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.709%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">13</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={bch} />
                                    <h6 className='mt-1'>BCH</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.709%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">14</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={thetha} />
                                    <h6 className='mt-1'>THETA</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.709%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">15</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={hbar} />
                                    <h6 className='mt-1'>HBAR</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='red'>-0.779%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">16</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={pankcake} />
                                    <h6 className=''>PancakeSwap  <br /> (CAKE)</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='red'>-0.099%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">17</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={grt} />
                                    <h6 className='mt-1'>GRT</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.099%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">18</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={dash} />
                                    <h6 className='mt-1'>DASH</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>-0.569%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">19</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={nexo} />
                                    <h6 className='mt-1'>NEXO</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='red'>-0.569%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                        <tr className='bg-grey'>
                            <th scope="row">20</th>
                            <td>
                                <div className='d-flex'>
                                    <img height="30px" width="30px" className='mr-2 currencies' wi src={tfeul} />
                                    <h6 className='mt-1'>TFUEL</h6>
                                </div>
                            </td>
                            <td>$4.957</td>
                            <td className='green'>+0.569%</td>
                            <td>$9612894348.059</td>
                            <td>$96467892.609</td>
                            <td>
                                <div class="text">
                                    <img className='cryptobutton1' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdElEQVR4nO1VsUoDQRBdKzGdQSwURJBUKSy1ECut7bQ2O9kzhYWVYGXpJ+QvAiFI1NxOUNAyNnZJE0ildzunIAaEk7kknGC8KGRBxQcDj2WXN7vMeyvEP95h7+lsVtgGkMac765bFZGkG9LgC5C7nbjReajN5wk3dn13WVI1zVwFekV1yinmSSUNNoEwBIOvkrDwqQgYzEcbSZck1TeZc4dOUM/01vHLJQlPRBhOWBUBg54id2nYu+4AYQsMFpWPa31ecQwuRpwSymA3FtFt8NysGDck6Ub/BnfKv1gYu0A8XfpGPeKMsAVp8PigfT0lfiT2w9NJIH1kTaBAV9OS9CW/tRWB3P35HBDeDnwydgHw3Gw057GpuqM84rCPDFaYR/4yWGTOvvsgwA5lp37X3U5Qzwx80ksKXeo3mB9+E9KH1kUYnKKcptEhg81RCaw65RSndZTGVE1zijPnVBdJAF9vSdLP1qZrAAhwFQhr4k/83b8Kb7o9CmA1uDpyAAAAAElFTkSuQmCC"></img> 
                                     <div class="overlay"></div>
                                    <button className='cryptobutton cryptobutton12'>Exchnage</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
