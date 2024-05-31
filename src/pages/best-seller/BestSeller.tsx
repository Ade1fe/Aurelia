import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import ProductCard from "../../components/cards/ProductCard"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Bestsellerr.css';

// import required modules
import { Pagination } from 'swiper/modules';


const BestSeller = () => {
  return (
    <Box  maxW='1400px' mx='auto' mt='8rem'>

<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Shampoo</Tab>
    <Tab>Sunscreen</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
      </Swiper>
    </>
    </TabPanel>
    <TabPanel>
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
        <SwiperSlide>    <ProductCard /> </SwiperSlide>
      </Swiper>
    </>
    </TabPanel>
  </TabPanels>
</Tabs>
      
    </Box>
  )
}

export default BestSeller
