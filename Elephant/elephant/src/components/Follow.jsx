import React from 'react'
import FollowImage from './FollowImage'
import Footer from './Footer'
function Follow() {
  return (
    <div>
        <section>
        <div className='container-py'>
        <div className='follow-title'>
                <h2>BİZİ INSTAGRAM’DA FOLLOW ET</h2>
                <p>elephant_accessories #elephant_accessories</p>
            </div>

            <FollowImage />
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default Follow