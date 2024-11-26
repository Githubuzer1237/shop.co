import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Brand from '../components/brands/Brand';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Category from '../components/category/Category';
import Browse from '../components/browse/Browse';
import Happy from '../components/Happy/Happy';
import Stay from '../components/stay/Stay';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Brand/>
      <Category/>
      <Browse/>
      <Happy/>
      <Stay/>
    </>
  );
};

export default Home;
