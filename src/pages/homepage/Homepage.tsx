import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { BestSeller, BundlePacks, HeroComp, Navbar } from '../..';
import Categories from '../categories/Categories';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box mx='auto'>
      <Navbar isScrolled={isScrolled} />
      <HeroComp />
      <Categories />
      <BundlePacks />
      <BestSeller />
    </Box>
  );
};

export default Homepage;
