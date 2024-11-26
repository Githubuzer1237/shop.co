import React from 'react'
import s from './Browse.module.scss'
import Title from '../Title/Title'

const Browse = () => {
  return (
   <>
   <div className={s.wrapper}>
    <div className="container">
        <div className={s.box}>
            <Title >BROWSE BY dress STYLE</Title>
            <div className={s.cards}>
                <div className={s.card1}>
                    <h2  className={s.title}>Casual</h2>
                </div>
                <div className={s.card2}>
                    <h2  className={s.title}>Casual</h2>
                </div>
                <div className={s.card3}>
                    <h2  className={s.title}>Casual</h2>
                </div>
                <div className={s.card4}>
                    <h2  className={s.title}>Casual</h2>
                </div>
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Browse