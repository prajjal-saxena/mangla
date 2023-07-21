import React from 'react';
import brand from './images/cover-img/logo.png';
import brand1 from './images/brand2.png';
import brand2 from './images/cover-img/vyomlogo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BrandListHome = () => {
  return (
    <Wrapper className='flex justify-around bg-[#d4c09e] h-[30px] md:h-[60px] fixed w-100 z-[9]'>
        <div className='brand'>
          <Link to="/"><img width="100%" className='h-[30px] md:h-[60px] cursor-pointer ' src={brand} alt="" /></Link>
        </div>
        <div className='brand'>
          <Link to="/vyom"><img width="100%" className='h-[30px] md:h-[60px] cursor-pointer' src={brand1} alt="" /></Link>        </div>
        <div className='brand'>
           <Link to="/vyom-category"><img width="100%" className='h-[30px] md:h-[60px] cursor-pointer pb-1' src={brand2} alt="" /></Link>        
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .brand{
      width: 12%;
   }
`
export default BrandListHome