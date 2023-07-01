import React from 'react'
import SeactionHeaderContainer from '../../../components/commons/section-header/header.container'
import GeneratorComponentCards from './generator-component-cards'

export default function GeneratorComponent({title, data}) {

  return (
    <div className='generator-component'>
        <SeactionHeaderContainer title={title}/>
        <GeneratorComponentCards data={data}/>
    </div>
  )
}
