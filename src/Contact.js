import React from 'react'
import styled from 'styled-components'
import covimg from './images/contact.jpg';
import {FiPhoneCall} from 'react-icons/fi';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BiMailSend} from 'react-icons/bi';

const Contact = () => {
  return (
    <Wrapper>
        <div className='contact-detail' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${covimg})`, width: "100%", height: "294px"}}>
              <h1 style={{width: "100%", height: "294px",display: "flex"}} className='justify-center items-center text-7xl no-underline'>Contact Us</h1>
        </div>
        <div className='text-white container-fluid md:flex md:justify-between'>
           <div className='footer1 md:col-6 py-[70px] px-[40px]'>
              <h2>Contact Us</h2>
              <div className='flex cont'>
                 <div>
                   <FiPhoneCall className='text-[60px] bg-[#ae9162] p-2 rounded-full mr-5'/>
                 </div>
                 <div className='flex flex-col justify-center'>
                    <h3>Call Us</h3>
                    <p>099990 13253</p>
                 </div>
              </div>

              <div className='flex cont'>
                 <div>
                   <FaMapMarkerAlt className='text-[60px] bg-[#ae9162] p-2 rounded-full mr-5'/>
                 </div>
                 <div className='flex flex-col justify-center'>
                    <h3>Address</h3>
                    <p>A-15, Block A, Sector 5, Noida, Uttar Pradesh 201301</p>
                 </div>
              </div>

              <div className='flex cont'>
                 <div>
                   <BiMailSend className='text-[60px] bg-[#ae9162] p-2 rounded-full mr-5'/>
                 </div>
                 <div className='flex flex-col justify-center'>
                    <h3>Mail Us</h3>
                    <p>narayanudyog@gmail.com</p>
                 </div>
              </div>
           </div>
           <div className='footer1 contact2 md:col-6 bg-[#ffffff5e] py-[70px] px-[40px]'>
              <h2>Enquire Now</h2>
              <form>
                <div className='flex justify-between'>
                  <div className="form-group firstname">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group firstname">
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                </div>
                <div className="form-group">
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <input type="submit" className='btn btn-warning w-100 bg-yellow-500' value="Submit" />
              </form>
           </div>
        </div>
        <div className="container-fluid my-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.341998387652!2d77.32264997430907!3d28.589515286034985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f86e79ab19%3A0x5edbda43258c53db!2sM%2FS%20Narain%20Udyog%20-%20Agarbatti%20Manufacturer%20in%20Delhi%20NCR!5e0!3m2!1sen!2sin!4v1685786803759!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.firstname{
  width : 48%;
}
.form-group{
  margin-bottom: 10px;
}
.cont{
  margin-bottom: 30px;
}
.contact-detail{
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
   @media (max-width: 600px){
      .footer1{
        width: 100%;
      }
      .cont{
        margin-bottom: 10px;
      }
   }
`
export default Contact