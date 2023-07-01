import React from 'react'
import { data } from '../../utilits/navigation_nav_data'
import { Link, useParams } from 'react-router-dom'

export default function NavigationUl() {
  return (
    <div className='navigation_nav'>
        <ul className='navigation_ul'>
          {
            data && data.map(item => {
            return    <li key={item.id} className='navigation_ul_li'><Link to={`${item.link}`}>{item.title}</Link></li>
            })
          }
        </ul>
    </div>
  )
}
