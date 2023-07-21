import React from 'react'
import CatCoverImg from './components/CatCoverImg'
import { useProductContext } from './context/productContext'
import styled from 'styled-components';
import DomesticItem from './images/domestic/category/cat.png'
import CoverImg from './images/domestic/category/cover2.jpg'

const VyomCatInner = () => {
  const {vyom} = useProductContext();
  const coverDomes = vyom[0]?.desc2;
  
  const changeBackground = {
     name : "Vyom Products",
     bgcover: CoverImg
  }

  return (
    <>
    <CatCoverImg changeBackground = {changeBackground}/>
    <Wrapper className='container'>
    <div className="row">
        {
            vyom.map((curElem)=>(
                <>
                   <div key={curElem.id} className='col-3'>
                     
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
                                             <a href="/" className='addToCart lg:tracking-normal bg-black'>Add To Cart</a>
                                             </div>
                                         </div>
                                    
                                 </div>
                           </div>

                           <div className='flex justify-between'>
                              <div className='lg:tracking-normal'><p>{curElem.desc1}</p></div>
                              <div className='lg:tracking-normal'><p>{curElem.desc3}</p></div>
                           </div>
                           <div className='flex w-full'>
                              <div className='w-full'><a href="/" className='addToCart addCart lg:tracking-normal'>Add To Cart</a></div>
                           </div>
                        </div>
                   
                  </div>
                </>
            ))
         }
         </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`

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
`;
export default VyomCatInner