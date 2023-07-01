import React from 'react'
import SectionHeaderComponent from './header.component'

export default function SeactionHeaderContainer({title}) {
  return (
    <div className='Seaction-header-container'>
        <SectionHeaderComponent title={title}/>
    </div>
  )
}
