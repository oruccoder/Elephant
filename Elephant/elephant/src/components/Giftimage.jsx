import React from 'react'
import rectangle from './img/gifts1.jpeg'
import rectangle3 from './img/gifts2.jpeg'
import rectangle4 from './img/gifts3.jpeg'
import rectangle5 from './img/gifts4.jpeg'
function Giftimage() {
  return (
    <div>
        <div className='gifts_images'>
                <div className='content'>
                <a href='#'><img src={rectangle}></img></a>
                <a href='#'><img src={rectangle3}></img></a>
                <a href='#'><img src={rectangle4}></img></a>
                <a href='#'><img src={rectangle5}></img></a>
                </div>
            </div>
           
    </div>
  )
}

export default Giftimage