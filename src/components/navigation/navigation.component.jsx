import React from 'react'
import NavigationUl from './navigation_ul'
import NavigationCategoriy from './navigation-categoriy'

export default function NavigationComponent({data}) {
  return (
    <div className='navigation-component'>
        <NavigationCategoriy data={data} />
        <NavigationUl/>
    </div>
  )
}
