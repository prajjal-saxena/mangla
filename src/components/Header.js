import React, { useState } from 'react';
import logo from '../images/brand1.png';
import {BsFillCartFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {HiMenuAlt3} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import {BsSearch} from 'react-icons/bs'; 
import BrandListHome from '../BrandListHome';
import { Link, NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navb justify-between container-fluid w-100 flex sticky top-0 z-10">
        <div className='absolute right-[2px] top-[15px] md:hidden cursor-pointer' onClick={() => setShow(!show)}>
          {show ? (
            <AiOutlineClose  className='text-white'/>
          ):(<HiMenuAlt3 className='text-white'/>)}
        </div>
        <div className='w-[30%] md:w-[20%]'>   
                
          <img className= "logo" src={logo} alt=""/>
        </div>
        <div className="w-[60%] md:w-[30%]  flex justify-center items-center">
        
          <BsSearch className='relative left-[30px] opacity-[0.5]'/>
          <input type="text" className='w-[80%] md:w-[60%] pl-[40px] rounded-lg' placeholder='Search' />    
        </div>
        <div className='w-[0%] md:w-[40%] flex items-center justify-end max'> 
          <ul className={`lg:flex lg:justify-between lg:items-center lg:z-auto absolute ${show ? "top-10 max-md:my-8 max-md:w-full max-md:left-0 opacity-100 max-md:bg-black" : "min-md:top-[-1000px] max-md:opacity-0"} min-lg:opacity-100`}>
            <li className='md:py-2 md:px-4'><NavLink to="/" className='text-white' onClick={() => setShow(!show)}>Home</NavLink></li>
            
            <li className='md:py-2 md:px-4'><NavLink to="/"  onClick={() => setShow(!show)} className='text-white'>About</NavLink></li>
            <li className='md:py-2 md:px-4'><NavLink to="/contact"  onClick={() => setShow(!show)} className='text-white'>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className='w-[20%] flex items-center justify-center'>
              <NavLink to="/cart"><BsFillCartFill className='text-white mr-2'/></NavLink>

              <span data-bs-toggle="modal"           data-bs-target="#loginModal">
                   <NavLink to='/login'><FaUserAlt className='text-white ml-2'/></NavLink>
              </span>
              

        </div>
      </nav>

      <BrandListHome/>
    </>
  )
}

export default Header