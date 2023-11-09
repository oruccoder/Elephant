import React from 'react'
import accessoryimage  from './img/Frame 4.png'
import Collections from './Collections'
function Accessory() {
  return (
    <div>
        <section className='accessory'>
            <div>
            <img src={accessoryimage}></img>
            </div>
        </section>
        <Collections />
    </div>
  )
}

export default Accessory