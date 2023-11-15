import React from 'react'
import Giftimage from './Giftimage'
import Accessory from './Accessory'
function Gifts() {
  return (
    <div>
        <div className='container-py'>
            <div className='gifts-tittle'>
                <div className='gift_text'>
                    <h3>HƏDİYYƏLİK</h3>
                </div>
                <div className='all-gift'>
                    <a href='#'>Hamısına bax</a>
                </div>
            </div>
            <Giftimage />
        </div>
        <Accessory />
    </div>
  )
}

export default Gifts