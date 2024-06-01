import { Box, Button, Image, Text } from '@chakra-ui/react';
import { backgroundBrown } from '../assets'; 

const AboutUs = () => {
  return (
    <Box h={['390px']} mt='8rem' pos='relative' maxW='1400px' mx='auto' borderRadius='20px' overflow='hidden'>
      <Image h='full' w='full' objectFit='cover' src={backgroundBrown} alt="Background" />
      <Box className="" pos='absolute' top='30%' 
      maxW={['450px']} p='20px'
      bg='rgba(255,255,255,0.05)'
      backdropFilter='blur(5px)'
    shadow='base'
      >
        <Text fontSize={['x-large', 'xx-large']} fontWeight='bold'>About Us</Text>
        <Text fontSize={['md',' lg']} my='0.4rem'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae quibusdam mollitia alias possimus vero nemo ea, amet in rem?
        </Text>
        <Button borderRadius='40px' className="">Learn more</Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
