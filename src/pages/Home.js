import React from 'react';

import Case from '../components/home/case';
import Hero from '../components/home/hero';
import Services from '../components/home/services';
import About from '../components/home/about';
import Social from '../components/home/social';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Case />
      <Services />
      <About />
      <Social />
    </div>
  );
}

export default Home;