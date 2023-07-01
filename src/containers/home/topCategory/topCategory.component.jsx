import React from 'react'
import TopCategoryComponentCard from './topCategory.component-card'

export default function TopCategoryComponent({data, title='Лучшие Категории Месяца'}) {
// console.log(data.data);
  return (
    <div className='top-category-component'>
        <h3 className='top-category-component-title'>{title}</h3>
       <div className='top-category-component-cards'>
       {
          (data.data) ? 
          data.data.map((item, index) => {
            return <TopCategoryComponentCard key={item.id} dataImage={item.image} dataTitle={item.title} />  
          })
          :
          <></>
        }  
       </div>
    </div>
  )
}
