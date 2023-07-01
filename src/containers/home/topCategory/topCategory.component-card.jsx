import React from 'react'

export default function TopCategoryComponentCard({dataImage, dataTitle}) {
  return (
   <div className='topCategory-card-container'>
     <div className='topCategory-card-component'>
      <img className='topCategory-card-img' src={dataImage} alt="top category img" />
      <p className='topCategory-card-p'>{dataTitle}</p>
    </div>
   </div>
  )
}
