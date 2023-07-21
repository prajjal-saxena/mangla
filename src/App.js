import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Header from './components/Header';
import Footer from './components/Footer';
import AddToCart from './AddToCart';
import VyomBrand from './VyomBrand';
import Payment from './Paymentgate';
import PlaceAddress from './PlaceAddress';
import DomesticCatInner from './DomesticCatInner';
import VyomCatInner from './VyomCatInner';
import VyomCatAll from './VyomCatAll';
import LoginPage from './components/LoginPage';
import vyomSubCat from './VyomSubCategory';
import VyomSubCategory from './VyomSubCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header/>
         <Routes>
            <Route exact path='/' element={<Home/>}/>
              <Route exact path='/vyom' element={<VyomBrand/>}/>

            <Route exact path='/products' element={<Products/>}/>
            {/* <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/> */}
            <Route exact path='/cart' element= {<AddToCart/>}/>

            <Route exact path='/domestic-category' element={<DomesticCatInner/>}/>
            <Route exact path='/vyom-product' element={<VyomCatInner/>}/>

            <Route exact path='/vyom-category' element={<VyomCatAll/>} />
            <Route exact path='/vyom-product/:title' element={<VyomSubCategory/>}/>
            <Route exact path='/payment' element={<Payment/>} />

            <Route exact path='/address' element={<PlaceAddress/>} />

            <Route exact path='/login' element={<LoginPage/>} />
          </Routes> 
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
