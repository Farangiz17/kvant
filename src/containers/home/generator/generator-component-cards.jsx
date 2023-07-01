import React from 'react'
import ProductCard from '../../../components/commons/product-card/product-card'

export default function GeneratorComponentCards({data}) {
 console.log('kk==>', data);
  return (
    <div className='generator-component-cards'>
       {(data) &&
        data.map((item, index) => {
            return  <ProductCard key={index} id={item.id} title={item.name} image={item.images} price={item.price}/>
        })
       }
    </div>
  )
}
