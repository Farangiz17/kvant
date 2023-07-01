import React from 'react'
import Favorite from './favorite'
import Korzinka from './korzinka'
import Register from './register'
import { Link } from 'react-router-dom'

export default function HeaderActions() {
  return (
    <div className='header_actions'>
    <Link to='/account/wishlist' ><Favorite/></Link>
    <Link> <Korzinka/></Link>
      <Register/>
    </div>
  )
}
