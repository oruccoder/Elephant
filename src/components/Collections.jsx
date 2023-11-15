import React from 'react'
import CollectionsImage from './CollectionsImage'
import Trending from './Trending'
function Collections() {
  return (
    <div>
        <section>
            <div className='container-py'>
                <div className='collection-title'>
                    <h3>KOLLEKSİYALARIMIZ</h3>
                </div>

                <CollectionsImage />
            </div>
        </section>
        <Trending />
    </div>
  )
}

export default Collections