import React from 'react'
import s from './Category.module.scss'
import Title from '../Title/Title'
import Products from '/public/products.json'
import CategoryCard from '../CategoryCard/CategoryCard'
const Category = (  ) => {
  return (
    <>
    <section className={s.category}>
  <div className="container">
  <Title orient="center">hdhf</Title>
     <div className={s.wrapper}>
   {
      Products.slice(0, 4).map(card => (
        <CategoryCard key={card.id}  image={card.image} name={card.name}  price={card.price} /> 
      ))
   }
                                                  
     </div>
  </div>

    </section>
    </>
  )
}

export default Category
