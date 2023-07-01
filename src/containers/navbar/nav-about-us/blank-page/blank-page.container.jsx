import React from 'react'
import CustomContainer from './custom.container'
import NewsletterContainer from './newsletter.container'
import CrumbContainer from '../../../../components/commons/seaction-top-crumb/ps-breadCrumb.container'

export default function BlankPageContainer() {
  return (
    <div>
      <CrumbContainer glavni='Home' this='Blank Page' />
      <CustomContainer/>
      <NewsletterContainer/>
    </div>
  )
}
