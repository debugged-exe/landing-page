import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar/nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomeLanding from './Components/HomeLanding/HomeLanding';
import OurCompany from './Components/OurCompany/OurCompany';
import Contact from './Components/Contact/Contact';
import Product from './Components/Products/product';
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const showPolicy=()=>{
    setModalShow(true)
  }

  return (
    <div>
    <PrivacyPolicy
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
      <Navbar />
      <HomeLanding/>
      <Product/>
      <OurCompany/>
      <Contact/>
      <Footer showPolicy={showPolicy}/>
    </div>
  );
}

export default App;