import React from 'react'
import s from './CategoryCard.module.scss'
const CategoryCard = ({image, name="Soon...", rate="0", price="Нету в наличии"}) => {
  return (
    <>
    <div className={s.card}>
    <img src={image} alt="" />
    <h3>{name}</h3>
    <b>{price}</b>

    </div>

    </>
  )
}

export default CategoryCard