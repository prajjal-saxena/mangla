import React from 'react';
import coverim from '../images/domestic/category/cover.png';
import styled from 'styled-components';

const CatCoverImg = ({changeBackground}) => {
  const {name, bgcover} = changeBackground;
  return (
    <>
      <Wrapper className='relative'>
         <div className="coimg" style={{background : `url(${bgcover}) no-repeat center center/cover`}}></div>
         <div className='absolute top-0 w-100 h-80 flex justify-center items-center text-white'>
            <p className='text-5xl underline'><strong>{name}</strong></p>
         </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
   .coimg {
      width: 100%;
      height: 300px;
      background-attachment: fixed!important;
      background-position: bottom;
   }
`

export default CatCoverImg