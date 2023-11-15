import React from 'react'
import rectangle7 from './img/collection1.jpeg'
import rectangle8 from './img/collection2.jpeg'
import rectangle9 from './img/collection3.jpeg'
function CollectionsImage() {
  return (
    <div>
        <div className='collections'>
    <div className='collection_img'>
        <a href='#'><img src={rectangle7}></img></a>
        <div className='collections_name'>
            <a href='#'><h3>SEPLƏR</h3></a>
            <hr></hr>
        </div>
    </div>
    
    <div className='collection_img'>
        <a href='#'><img src={rectangle8}></img></a>
        <div className='collections_name'>
            <a href='#'><h3>SIRĞALAR</h3></a>
            <hr></hr>
        </div>
    </div>
    
    <div className='collection_img'>
        <a href='#'><img src={rectangle9}></img></a>
        <div className='collections_name'>
            <a href='#'><h3>ÜZÜKLƏR</h3></a>
            <hr></hr>
        </div>
    </div>
</div>

    </div>
  )
}

export default CollectionsImage