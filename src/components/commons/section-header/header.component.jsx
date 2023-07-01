import React from 'react'

export default function SectionHeaderComponent({title}) {
  return (
    <div className='section-header-component'>
       <h3 className='section-header-component--title'>{title}</h3>
       <p className='section-header-component--links'>Посмотреть все</p>
    </div>
  )
}
