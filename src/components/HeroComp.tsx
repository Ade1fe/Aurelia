import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { BiBus } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import React from 'react'; // Import React
import { heroCompImg } from '../assets';

const HeroComp = () => {
  return (
    <Box position='relative'>
      <Image src={heroCompImg} objectFit='cover' w='full' h={['500px', '550px', '600px', '650px', '700px']} />
      <Box
        position='absolute'
        bottom='0'
        w='full'
        bg='rgba(255,255,255,0.05)'
        backdropFilter='blur(5px)'
        py='4'
      >
        <Box display='flex' justifyContent='space-around' alignItems='center' gap='4'>
          <FeatureIcon icon={BiBus} text='Free Shipping' />
          <FeatureIcon icon={BsHeadset} text='24/7 Customer Support' />
          <FeatureIcon icon={TbTruckReturn} text='Easy Returns' />
        </Box>
      </Box>
    </Box>
  )
}

// Component for individual feature icon and text
const FeatureIcon: React.FC<{ icon: React.ElementType; text: string }> = ({ icon: IconComponent, text }) => {
  return (
    <Box textAlign='center' color='white' className='subtitle'>
      <Icon as={IconComponent} boxSize={['20px', '30px', '40px']} />
      <Text mt='2' fontSize={['sm', 'md', 'lg']}>{text}</Text>
    </Box>
  )
}

export default HeroComp
