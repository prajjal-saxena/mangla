import React, { useEffect } from 'react';
import CoverImage from './components/CoverImage';
import coverImg from './images/cover-img/coverbg.jpg';
import Category from './components/Category';
import MixCategory from './components/MixCategory';
import DomesticProduct from './components/DomesticProduct';
import VyomProducts from './components/VyomProducts';
import { useProductContext } from './context/productContext';
import { DomesticCategory } from './API/DomesticCategory';

const API = DomesticCategory;

const Home = () => {

  const {getHomeCategory, categoryHome} = useProductContext();
  console.log("This is home" ,categoryHome);
  //For cover image
  const coverText = {
     text1: "Feel Blessed Feel Good",
     text2: "Premium Quality Products.",
     coverImg: coverImg
  }


  // PASSING THE DATA OF CATEGORY HOME
  useEffect(()=>{
     getHomeCategory(API);
  }, [])
  return (
    <>
      <CoverImage coverText={coverText}/>
      <div className="container-fluid">
        <div className="productss md:py-10">
          <h1 className='pb-4'>Products</h1>
          <div className='row'>
            <div className='col-md-6'>
              <DomesticProduct/>
            </div>
            <div className='col-md-6'>
              <VyomProducts/>
            </div>
          </div>
        </div>
      </div>
      
      <section className="container-fluid">
         <div className='categories row'>
          {
            categoryHome.map((curElem)=>{
              return(
              <>
                <div className='col-3 p-0'><Category key={curElem.id} {...curElem}/></div>
              </>
            )})
          }
         </div>
      </section>

      <section className="container-fluid">
         <MixCategory/>
      </section>

      
    </>
  )
}

export default Home