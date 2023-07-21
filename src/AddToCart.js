import React, { useState } from 'react'
import lgo from './images/domestic/item.png';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {AiFillMinusCircle} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { useCartContext } from './context/cart_context';
import { useEffect } from 'react';
import axios from 'axios';
import { useProductContext } from './context/productContext';

 
const API = "https://nimittech.com/manglaApi/domestic_products.php";

const AddToCart = () => { 

  //SELECTED OPTION IN GRAMS
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (e) =>{
    setSelectedOption(e.target.value);
  }



  const {cart} = useCartContext()
  const {domestic} = useProductContext()


  // console.log("Cart is", cart[0].weight)

  const [quantity, setQuantity] = useState(1) 
  const plus = (itemId) =>{
    const domesAll = domestic.find((elem)=> elem.id===itemId);
    const dome= domesAll.id
    console.log("domeeeee",dome)
    console.log("domeeeeid", itemId)
    if(dome){
      
      setQuantity(quantity +1)  

    }
  }
  const minus = (itemId) =>{

      setQuantity(quantity - 1);
      quantity <= 0 ? setQuantity(0): setQuantity(quantity - 1);
  }
  // const [data, setData] = useState([])

//   function getAPiid () {
//     axios.get(API)
//    .then(function(response){
//         //  console.log("APIIII",response.data)
//         //  setData(response.data)
//     })
//     .catch(function(error){
//            console.log(error);
//      });
// }  

//   useEffect(()=>{
//      getAPiid();
//   },[])

 
  return (
    <>
      <div className="container-fluid">
        <div className="cartt">
            <h1 className="py-7">Your Cart</h1>
            <table className="table text-white" style={{height: "100px"}}>
                <thead>
                    <tr>
                    <th scope="col">Item</th>
                    <th scope='col'>Item Name</th>
                    <th className="col">Grams</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                   
                  { 
                   
                    
                    cart.map((curItem, i) => (
                      
                      <>
                      <tr key={curItem.id}>
                      
                      <th scope="row" width="20%"><img width="20%" src={curItem.img} alt="" /></th>
                      <td className='align-middle'>
                         
                             <p>{curItem.title}</p>
                          
                      </td>
                      <td class="nav-item dropdown" style={{paddingTop : "17px"}}>
                        <select name="cars" id="cars" className='text-dark'>
                          {
                            
                            curItem?.weight.map((cur, i) =>(
                               <option key={i} value={selectedOption}  onChange={handleOptionChange}>{cur}</option>
                            ))
                          }
                          
                        </select>
                      </td>
                      <td className='align-middle'>
                         
                             <p>Rs 15</p>
                          
                      </td>
                      <td className='align-middle'>
                          <div className="flex justify-between w-[40%]">
                            <span><AiFillMinusCircle onClick={()=>minus(curItem.id)}/></span>
                            <span>{quantity}</span>
                            <span><BsFillPlusCircleFill onClick={()=>plus(curItem.id)}/></span>
                          </div>
                      </td>
                      <td className='align-middle text-center'>
                        <i class="fa fa-trash cursor-pointer" style={{color : "red"}} aria-hidden="true"></i>
                      </td>
                      <td className='align-middle'>
                         
                             <p>Rs 30</p>
                          
                      </td>
                  </tr>
                  </>
                    ))
                  }
                    
                   
                </tbody>
            </table>
            <div className="text-white">
            <div className='flex justify-end p-3'>
                <p>Sub Total:</p>
                <p>Rs 30</p>
            </div>
            <div className='flex justify-end p-3'>
                <p>Grand Total:</p>
                <p>Rs 1200</p>
            </div>
            </div>
            
            <div className='block w-100 text-center'>
              <NavLink to='/login'><button className='viewBtn'>Place Order</button></NavLink>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddToCart