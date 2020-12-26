import './App.css';
import Navbar from './Components/Navbar/nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomeLanding from './Components/HomeLanding/HomeLanding';
import OurCompany from './Components/OurCompany/OurCompany';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <HomeLanding/>
      <OurCompany/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;