import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarr from "./Navbarr"
import { Container } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Blog from './Blog';
import Faq from './Faq';  
import Viewoffer from './Viewoffer';  
import ParticlesBackground from './compo/ParticlesBackground';
import AllCurrencies from './AllCurrencies';

function App() {
  return (


     <Router>
      
          <Routes> 
            <Route exact path="/" element={[<Navbarr/>,<Home />,<Footer /> ]} />
            <Route exact path="/About" element={[<Navbarr/>, <About />,<Footer />]} />
            <Route exact path="/Footer" element={[<Navbarr/>, <About />, <Footer />]} />
            <Route exact path="/Blog" element={[<Navbarr/>, <Blog />, <Footer />]} />
            <Route exact path="/Faq" element={[<Navbarr/>, <Faq />, <Footer />]} />
            <Route exact path="/viewoffer" element={[<Navbarr/>, <Viewoffer />, <Footer />]} />
            <Route exact path="/allCurrencies" element={[<Navbarr/>, <AllCurrencies />, <Footer />]} />


            {/*<Route path="/features" element={[<navbar />, <features />]} />
            <Route exact path="/pricing" element={[<navbar/>, <pricing />]} />*/}

            </Routes>
           
      </Router>
      




  );
}
export default App;