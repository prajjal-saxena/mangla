import React, { useEffect } from 'react'
import vyomImg from './images/domestic/category/cover.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import VyomProductCat from './API/VyomProductCat'
import { useProductContext } from './context/productContext'


const vyomCategory = VyomProductCat;


const VyomCatAll = () => { 

  const { vyom, getVyom } = useProductContext();

  // const getTitle = () =>{
  //    console.log("vyom s", vyom.length)

  //    vyom[i].desc1.find((elem)=>{
        
  //    })
  //    for (let i= 0; i <= vyom.length; i++){
  //       // let pro = vyom[i].desc1
  //       // console.log("pro", pro);
  //        if(vyom[i].desc1 === "Essential Oils"){
  //            return vyom[i];
  //        }
  //        else if(vyom[i].desc1 === "Diffuser"){
  //            return vyom[i];
  //        } else if(vyom[i].desc1 === "Scenteds Candles"){
  //            return vyom[i];
  //        }
  //    }
  // }

  // useEffect(()=>{
  //    getTitle()
  // }, [])
  return (
    <Wrapper className="container mt-16 text-white">
        <div className='category-a'>
           {
             vyomCategory.map((curElem) => (
              <div className='cat1'>
                  {/* <NavLink to={`/vyom-product/${getTitle()}`}> */}
                      <img width="100%" src={vyomImg} alt="" />
                      <p>{curElem.maintitle}</p>
                  {/* </NavLink> */}
              </div>
             ))
           }
           
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .category-a{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   }
   .cat1{
     width: 100%;
   }
   .cat1 p{
    position: relative;
    bottom: 35px;
    background: #00000087;
    text-align: center;
   }
   @media (min-width : 600px) {
    .cat1{
     width: 30%;
   }
   }
`;

export default VyomCatAll