import React, { useState } from 'react';
import card from './images/card.png';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import qradio from './images/qrRadio.png';

const Paymentgate = () => {
  
  const [show, setShow] = useState(true)
  const [qr, setQr] = useState(false)
  const cardOption = () =>{
      setShow(!show)
  }
const qrOption = () =>{
  setQr(!qr);
  setShow(false);
}
  return (
    <div className="container">
        <div className='mt-16'>
              <h1>Payment</h1>
              <div className='row'>
                <div htmlFor='type1' className='col-6 flex justify-center'>
                  <label htmlFor="type1"></label>
                  <input onClick={cardOption}  type="radio" value="card1" id="type1" name="fav_card" style={{marginRight : "10px", width: "20px"}}/>
                  <img src={card} className='w-[15%] p-1 h-[57px]' alt="" />
                  <img src={card1} className='w-[15%] p-1 h-[57px]' alt="" />
                  <img src={card2} className='w-[15%] p-1 h-[57px]' alt="" />
                </div>
                <div className='col-6 flex justify-center'>
                  <label htmlFor="type2"></label>
                  <input onClick={qrOption} type="radio" id="type2" name="fav_card" value="card2" style={{width: "20px"}}/>
                  <img src={qradio} className='w-10' alt="" />
                </div>
              </div>


              {show && (<div className="form-one bg-[#f1f1f1] py-[30px] px-[25px] rounded-2xl md:w-[50%] md:m-auto">
                  <form>
                       <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Name
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                       </div>
                       <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Card Number
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                       </div>
                       <div className='row'>
                          <div className="mb-4 col-8">
                              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Expiry Date
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date"/>
                          </div>
                          <div className="mb-4 col-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                CVV
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password"/>
                          </div>
                          <input type="submit" className='bg-dark text-white rounded-md' value="Submit" />
                       </div>
                      
                  </form>
              </div>)}

              {qr && (<div className="qrpayment text-light my-32">
                  <p>Here we are visible qr code</p>
              </div>)}
        </div>

        
    </div>
   
  )
}

export default Paymentgate