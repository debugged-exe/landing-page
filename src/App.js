import './App.css';
import Navbar from './Components/Navbar/nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import HomeLanding from './Components/HomeLanding/HomeLanding';

function App() {
  return (
    <div>
      <Navbar />
      <HomeLanding/>
      <Footer />
    </div>
  );
}

export default App;
