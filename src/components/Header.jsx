import React, { useState } from 'react'
import logo from './img/Elephant-acc-profile-pic.png'
import headerimg from './img/Rectangle_1.png'
import Headerbutton from './Headerbutton';
import Gifts from './Gifts';
import CategoryLink from './CategoryLink';
export default function Header() {

  const [Open, setOpen] = useState(false)
  const toggleBars = () => {
    setOpen(!Open)
    const togglemenu = document.querySelector(".toggle_menu")
  
    togglemenu.style.display = (togglemenu.style.display == "" || togglemenu.style.display == "none") ? "block" : "none"
    
    const change = document.getElementById("change")
    change.classList.toggle("fa-xmark")
    togglemenu.classList.toggle('open');
  }

  return (
    <div>
      <hedaer>
        <div className='container-py'>
        <div className='container'>
            <div className='row'>
            <div className='logo'>
            <a href='#'><img src={logo}></img></a>
            </div>
            <nav>
                <a href='#'>Home</a>
                <a href='#'>Orders</a>
            </nav>
            </div>
        <div className='bars'>
        <i id='change' className='fas fa-bars' onClick={toggleBars}></i>
        </div>
        </div>
        </div>
        <div className='tittle'>
          <div className='header_image'>
            <img src={headerimg}></img>

            <div className='header_text'>
              <h2>Where Fashion Meets Function Explore Our Accessories.</h2>
              <div className='header-btn'>
              <Headerbutton />
              </div>
            </div>
          </div>
        </div>
        <div className='toggle_menu'>
          <div className='category'>
            <h1>Kategoriya</h1>
          </div>
          <CategoryLink />
        </div>
      </hedaer>
      
      <Gifts />
    </div>
  )
}
