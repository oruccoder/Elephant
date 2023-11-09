import React from 'react'
import rectangle11 from './img/follow1.jpeg'
import rectangle12 from './img/follow2.jpeg'
import rectangle13 from './img/follow3.jpeg'
import rectangle14 from './img/follow4.jpeg'
import rectangle15 from './img/follow5.jpeg'
import rectangle16 from './img/follow1.jpeg'
function FollowImage() {
  return (
    <div>
        <div className='follow_img'>
            <img src={rectangle11}></img>
            <img src={rectangle12}></img>
            <img src={rectangle13}></img>
            <img src={rectangle14}></img>
            <img src={rectangle15}></img>
            <img src={rectangle16}></img>
            </div>
    </div>
  )
}

export default FollowImage