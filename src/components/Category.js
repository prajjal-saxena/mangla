import React from 'react';
import cat1 from '../images/domestic/category/cat1.png';
import styled from 'styled-components';

const Category = (curElem) => {
  console.log("curElem", curElem)
  return (
    <>
    <Wrapper>

      <div>
          <div className="box cat text-center w-[100%] relative">
             <img src={cat1} alt=""/>
             <div className='inner absolute w-[100%] top-[50%]'>
               <button className='prod viewBtn brand-btn'>{curElem.maintitle}</button>
             </div>
          </div>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
   .box::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 50%;
        height: 50%;
        border-bottom: 2px solid #fff;
        border-left: 3px solid #fff;
        margin-left: 24px;
        margin-bottom: 24px;
    }
    .box::before {
        content: '';
        position: absolute;
        right: 24px;
        width: 50%;
        height: 50%;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        margin-top: 24px;
    }
    @media (max-width: 600px){
      .brand-btn {
        padding: 3px 4px;
      }
      .box::after {
        margin-left: 8px;
        margin-bottom: 8px;
      }
      .box::before{
        right: 8px;
        margin-top: 8px;
      }
    }
`;
export default Category