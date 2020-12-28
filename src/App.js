import './App.css';
import Navbar from './Components/Navbar/nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomeLanding from './Components/HomeLanding/HomeLanding';
import OurCompany from './Components/OurCompany/OurCompany';
import Contact from './Components/Contact/Contact';
import Product from './Components/Products/product';

function App() {
  return (
    <div>
      <Navbar />
      <HomeLanding/>
      <Product/>
      <OurCompany/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;