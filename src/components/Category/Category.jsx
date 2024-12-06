import React from 'react';
import s from './Category.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Products from '/public/products.json';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../Context';


const Category = () => {
  const { visible, addProducts } = useAppContext();

  return (
    <>
      <section className={s.Category}>
        <div className="container">
          <SectionTitle orient="center">NEW ARRIVALS</SectionTitle>

          <div className={s.wrapper}>
            {Products.slice(0, visible).map((card) => (
              <Link className={s.link} key={card.id} to={`/product/${card.id}`}>
                <Card
                  id={card.id} // Передаем id для уникального рейтинга
                  image={card.image}
                  name={card.name}
                  price={card.price}
                />
              </Link>
            ))}
          </div>

          {visible < Products.length && (
            <div className={s.loadMore}>
              <button onClick={addProducts} className={s.loadMoreButton}>
                Еще
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
