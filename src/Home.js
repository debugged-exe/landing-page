import './App.css';
import React,{useState} from 'react'
import HomeLanding from './Components/HomeLanding/HomeLanding';
import OurCompany from './Components/OurCompany/OurCompany';
import Contact from './Components/Contact/Contact';
import Product from './Components/Products/product';
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy';
import OilCards from './Components/Products/OilCards'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  

  return (
    <div>
      <HomeLanding/>
      <Product/>
      <OurCompany/>
      <Contact/>
      {/* <Footer showPolicy={showPolicy}/> */}
    </div>
  );
}

export default Home;