import React from 'react'
import s from './Title.module.scss'
const Title = ( {children="soon", orient="center"} ) => {
  return (
   <>
   <h2 style={{textAlign: orient}} className={s.title}>{children} </h2>
   </>
  )
}

export default Title