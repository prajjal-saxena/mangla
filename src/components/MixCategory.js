import React, { useEffect } from 'react'
import Slider from "react-slick";
import DomesticItem from '../images/domestic/item.png';
import styled from 'styled-components';
import { HomeMixProduct } from '../API/Productboth';
import { useProductContext } from '../context/productContext';
import { NavLink } from 'react-router-dom';

const API = HomeMixProduct;

const MixCategory = () => {
    const {getMixProductHome,  mixHome} = useProductContext();
    const coverDomes = mixHome[0]?.desc2

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
        arrow: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        
        ]
      };

   useEffect(()=>{
      getMixProductHome(API);
   },[])
  return (
    <Wrapper>
    <div className="bgSlider py-11 lg:py-32">
    <Slider {...settings}>
    {
            mixHome.map((curElem)=>(
                <>
                   <div key={curElem.id}>
                     
                        <div className="addItem-slider bg-gray-50 p-2 rounded-md mx-1">

                           <div className="flip-card">
                                 <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                       <img src={DomesticItem} alt="Avatar" style={{width:"300px",height:"250px"}}/>
                                    </div>
                                         <div className="flip-card-back">
                                            <p style={{fontSize: "11px"}}>{curElem.description}</p>
                                             <div className='card-gms flex justify-center'>
                                                {
                                                   coverDomes.map((curEle)=>(
                                                      <>
                                                      <div key={curEle.id} className={`weight cursor-pointer shadee rounded-sm md:p-1`}
                                                      style={{}}
                                                      >
                                                         
                                                               <p>{curEle.weight}</p>
                                                               <p>{curEle.price}</p>
                                                          
                                                      </div>
                                                      </>
                                                   ))
                                                }
                                             </div>
                                             <div>
                                             <NavLink to="/cart" className='addToCart lg:tracking-normal bg-black'>Add To Cart</NavLink>
                                             </div>
                                         </div>
                                    
                                 </div>
                           </div>

                           <div className='flex justify-between'>
                              <div className='lg:tracking-normal'><p>{curElem.desc1}</p></div>
                              <div className='lg:tracking-normal'><p>{curElem.desc3}</p></div>
                           </div>
                           <div className='flex w-full'>
                              <div className='w-full'><p className='addToCart addCart lg:tracking-normal'>Add To Cart</p></div>
                           </div>
                        </div>
                   
                  </div>
                </>
            ))
         }
      </Slider>
    </div>

  </Wrapper>
  )
}

const Wrapper = styled.section`
   .slick-prev, .slick-next{
      top: 40%;
      z-index: 1;
   }
   .slick-prev:before, .slick-next:before{
      color: #f8c301!important;
      font-size: 50px!important;
   }
   .slick-next{
      right: 40px!important;
   }
   .slick-prev {
      left: 7px;
   }
   .bgSlider{
      background-repeat: no-repeat!important;
      background-size: cover!important;
      text-align: center;
   }
   .bgSlider{
      background-repeat: no-repeat!important;
      background-size: cover!important;
      text-align: center;
   }



   .full-content{
            width: 30%;
            border: 1px solid black;
            padding: 30px;
        }
        .full-desc{
            display: flex;
            justify-content: space-between;
        }
        .full-description{
            display: flex;
            justify-content: space-between;
        }

        .flip-card {
  background-color: transparent;
  width: 100%;
  height: 250px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 305px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  /* background-color: #bbb; */
  color: black;
}

.flip-card-back {
  background-color: rgb(161 129 79);
  color: white;
  transform: rotateY(180deg);
  padding: 8px 21px;

}
.card-gms p{
   font-size: 9px!important;
   font-weight: 800;
}
.addCart{
   display: block;
   width: 100%;
}
`
export default MixCategory