import React from 'react'
import CoverImage from './components/CoverImage';
import coverImg from './images/cover-img/coverbg.jpg';

const VyomBrand = () => {
    const coverText = {
        text1: "VYOM",
        text2: "Products",
        coverImg: coverImg
     }
  return (
    <>
      <CoverImage coverText={coverText}/>
    </>
  )
}

export default VyomBrand