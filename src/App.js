import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contactus';
import About from './components/aboutus';
import Footer from './components/footer';
import Service from './components/service';
import Asset from './components/asset-management';
import Revenue from './components/revenue-management';
import Energyasset from './components/energy-asset';
import Hotelmanagement from './components/hotel-management';
import Digitalmarketing from './components/digitalmarketing';
import Guestmanage from './components/guestmanage';
import Profitmanage from './components/profit';
import Sales from './components/sales';
import Hoteloperation from './components/hotel-operation';
import Marketingplan from './components/marketingplan';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/asset" element={<Asset/>} />
        <Route path="/revenue" element={<Revenue/>} />
        <Route path="/energy-asset" element={<Energyasset/>} />
        <Route path="/hotel-management" element={<Hotelmanagement/>} />
        <Route path="/digitalmarketing" element={<Digitalmarketing/>}/>
        <Route path="/guest" element={<Guestmanage/>}/>
        <Route path="/profit" element={<Profitmanage/>}/>
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/hoteloperation" element={<Hoteloperation/>}/>
        <Route path="/marketingplan" element={<Marketingplan/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
