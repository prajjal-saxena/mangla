import React from 'react';
import logo from '../images/cover-img/logo.png';
import vyomlogo from '../images/cover-img/vyomlogo.png';
import {BsFacebook, BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <>
    <div style={{background: "linear-gradient(to right, rgb(189 151 92 / 85%), rgb(225 208 177 / 100%))"}}>
    <section className='container-fluid pt-12 pb-12'>
      <div className="footer row  text-white text-justify">
         <div className='col-12 col-md-3'>
            <div>
                <img src={logo} className='w-[100%]' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda non harum obcaecati quae hic necessitatibus maiores. Eaque, dolor quae et molestias ea distinctio obcaecati rerum possimus dolorem, explicabo deserunt.</p>
            </div>
         </div>
         <div className='col-12 col-md-3 text-center'>
            <div>
                <h2 className='mt-8'>Quick Links</h2>
                <ul className='text-left pl-20'>
                    <li><a href="/"><p>Home</p></a></li>
                    <li><a href="/"><p>Products</p></a></li>
                    <li><a href="/"><p>About</p></a></li>
                    <li><a href="/"><p>Contact Us</p></a></li>
                </ul>
            </div>
         </div>
         <div className='col-12 col-md-3'>
            <div>
                <div className='mb-5'>
                    <h2 className='mt-8'>Contact Us</h2>
                    <div className='text-left'>
                        <p>A-15, Sector 05, Gautam Budh Nagar, 
                        Sector 5, Noida-201301, 
                        Uttar Pradesh, India</p>
                        <p>9259297316</p>
                        <p>testing@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='mt-8'>Follow Us</h2>
                    <div className='flex w-[46%] justify-between'>
                        <div><BsFacebook className='text-[30px]'/></div>
                        <div><BsInstagram className='text-[30px]'/></div>
                        <div><AiFillTwitterCircle className='text-[30px]'/></div>
                    </div>
                    
                </div>
            </div>
         </div>
         <div className='col-12 col-md-3 text-center'>
            <img src={vyomlogo} className='w-[50%]' alt="" />
         </div>
      </div>
    </section>
    <div className="copy text-white" style={{background: "linear-gradient(to right, rgb(189 151 92), rgb(140 126 102))"}}>
        <div className="container text-center">
          <p>Copyright @2023. All Right Reserved.</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer