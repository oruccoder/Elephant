import React from 'react'
import rectangle10 from './img/Rectangle 10.png'
import BuynowButton from './BuynowButton'
import Follow from './Follow'
function Trending() {
  return (
    <div>
        <section>
        <div className='trending'>
        <div className='trending_img'>
            <img src={rectangle10}></img>
            </div>
            <div className='trending_bg'>
            <div className='trending_text'>
                <h3>İNDİ TRENDDƏDİR!</h3>
                <div className='trending_title'>
                    <h4>Bu qışı trenddə olan üzüklərlə keçirt, həyatına rəng qat!</h4>
                    <BuynowButton />
                </div>
            </div>
            </div>
        </div>
        </section>
        <Follow />
    </div>
  )
}

export default Trending