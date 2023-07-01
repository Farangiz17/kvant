import React from 'react'
import AboutHeaderContainer from './about-header.container'
import AboutAwardsContainer from './about-awards.container'
import AboutPostDetailContainer from './about--post-detail.container'
import CrumbContainer from '../../../components/commons/seaction-top-crumb/ps-breadCrumb.container'

export default function AboutComponent() {
  return (
    <div className='about-component'>
    <AboutHeaderContainer/>
    <CrumbContainer glavni='Главная' this='О нас'/>
    <AboutAwardsContainer/>
    <AboutPostDetailContainer/>
    </div>
  )
}
