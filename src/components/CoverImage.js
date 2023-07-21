import React from 'react';
import coverimg from '../images/cover-img/coverbg.jpg'
import styled from 'styled-components';

const CoverImage = ({coverText}) => {
  const {text1, text2, coverImg} = coverText
  return (
    <Wrapper>
     <div className="coverbg flex justify-center items-center" style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverimg})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "center",backgroundAttachment : 'fixed'}}>
        {/* <img className='w-100 md:h-[480px]' src={coverImg}  alt="" /> */}
        <div className='absolute'>
            <p className='text-md text-[#fff] sm:text-4xl'>{text1}</p>
            <p className='text-end text-[9px] sm:text-sm text-light italic'>{text2}</p>
        </div>
     </div>
     </Wrapper>
  )
}

const Wrapper = styled.section`
    .coverbg{
       height: 480px;
       width: 100%;
    }
`
export default CoverImage