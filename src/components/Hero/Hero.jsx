import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
  <>
  <section className={s.Hero}>
<div className="container rasimsosi">
    <div className={s.wrapper}>
        <div className={s.box}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div className={s.inner}>
              <div>
                <h4>200+</h4>
                <p>International Brands</p>
              </div>

              <div>
                <h4>2,000+</h4>
                <p>High-Quality Products</p>
              </div>

              <div>
                <h4>30,000+</h4>
                <p>Happy Customers</p>
              </div>
            </div>
        </div>
            <img className={s.image} src="/hero-img (2).png" alt="" />
    </div>
    <div className={s.info}>
      <img src="/brands-1 (2).svg" alt="" />
      <img src="/brands-2 (2).svg" alt="" />
      <img src="/brands-3 (2).svg" alt="" />
      <img src="/brands-4 (2).svg" alt="" />
      <img src="/brands-5 (2).svg" alt="" />
   
    </div>
</div>
  </section>
  
  
  
  </>
  )
}

export default Hero