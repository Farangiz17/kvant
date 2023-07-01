import React, { useEffect, useState } from 'react'
import ProductComponent from './product.component'
import ProductRepo from '../../repository/product-repository'
import { useParams } from 'react-router-dom'

export default function ProductContainer() {
    const {id} = useParams()
    const [product, setProduct] = useState([])

    const Product = async () => {
        const productPromise = await ProductRepo.getProductById(id)
        if (productPromise) {
            setProduct(productPromise)
        }
    }

    useEffect(() => {
        Product()
    },[])
  return (
    <div className='product-container'>
       {
        (product.data) &&
        <ProductComponent data={product.data}/>      
       }                                                                                                                                                                                                                                                                                               
    </div>
  )
}
