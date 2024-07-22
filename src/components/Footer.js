import React from 'react'
import './FooterStyles.css' 
import {FaFacebook,FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
        <div className='location'>
      <FaSearchLocation size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>
      <div>
        <p>123 Acme St</p>
        <h4>Houston , Tx</h4>
      </div>
      </div>
      <div className='phone'>
       <h4><FaPhone size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>+2348139617025</h4>
      </div>
      <div className='email'>
       <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight: '2rem'}}/>anu.oyebanjo@yahoo.com</h4>
      </div>
        </div>

        <div>
          <h4>
          About the Company
          </h4>

          <p>Lorem ipsum dolor sit ghjuy  sdfre  addswegut
 Ade rtadg uaghrdes abgafga hjuygtrddesr guyhtr
 Wer afrdg buytred sdeauyhj kiytre agfde asb buji</p>
          <div className='social'>
          <FaFacebook size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>
          <FaTwitter size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>
          <FaLinkedin size={30} style={{color:'#ffffff', marginRight: '1rem'}}/>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Footer