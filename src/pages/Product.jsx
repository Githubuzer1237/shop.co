import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '/public/products.json'
import ProductsWrap from '../components/ProductWrap/ProductsWrap'
const Product = () => {
   const {id} = useParams()
   const product = Products.find(item => item.id === Number(id))

  return (
    <>
    <ProductsWrap product={product} />
    </>
  )
}

export default Product