import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import SocialMedia from './SocialMedia';
function Footer() {
  return (
    <div>
            <div className='footer'>
                <footer>
                <div className='container-py'>
                    <div className='footer_write'>
                        <div className='footer_txt'>
                            <h2>SHOP</h2>
                            <a href='#'>KOLLEKSİYALAR</a>
                            <a href='#'>ÜZÜKLƏR</a>
                            <a href='#'>QOLBAQLAR</a>
                            <a href='#'>SEPLƏR</a>
                        </div>
                        <div className='about'>
                        <div className='footer_txt'>
                        <h2>ABOUT</h2>
                            <a href='#'>HAQQIMIZDA</a>
                            <a href='#'>ƏLAQƏ</a>
                        </div>
                        </div>
                        <div className='footer_txt'>
                        <h2>BİZƏ ABUNƏ OL</h2>
                            <div className='footer_input'>
                            <input type='text' placeholder='Enter Email'></input>
                            <div className='input_right_icon'>
                            <FaArrowRight />
                            </div>
                            <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
                </footer>
            </div>
    </div>
  )
}

export default Footer