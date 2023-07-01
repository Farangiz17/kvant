import React from 'react'
import {IoHeartOutline} from 'react-icons/io5'

export default function Favorite() {
  return (
    <div className='favorite'>
        <div className="favorite_icon">
            <IoHeartOutline/>
        </div>
        <span className='actions-heart-num'>0</span>
    </div>
  )
}
