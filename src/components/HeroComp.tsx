import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import { BiBus } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import React from 'react'; // Import React
import { heroCompImg } from '../assets';

const HeroComp = () => {
  return (
    <Box position='relative'>
      <Image src={heroCompImg} objectFit='cover' w='full' h={['550px', '600px', '650px', '700px', '750px']} />
      <Box position='absolute' w={['90%', '80%', '70%', '60%', '50%']} p='10px' color='white' backdropFilter='blur(5px)' top='50%' left='50%' transform='translate(-50%, -50%)' textAlign='center'>
  <Text fontSize={['x-large', 'xx-large', 'xxx-large']} lineHeight='45px' mb='2rem' className='title' color='white'>
    Your <Text as="span" fontWeight="bold">Ultimate</Text> Online Skincare <Text as="span" fontWeight="bold">Destination</Text>
  </Text>
  <Text>
    Discover a sanctuary for skincare enthusiasts, where <Text as="span" fontStyle="italic">beauty</Text> meets <Text as="span" fontStyle="italic">science</Text>, and self-care reaches <Text as="span" fontStyle="italic">new heights</Text>.
  </Text>
  <Button mt='2rem' bg='#DDB892' _hover={{bg: "#7F5539"}} color='white' mb='1rem' w='200px'> shop now</Button>
</Box>
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
      <Icon as={IconComponent} boxSize={['20px', '25px', '30px']} />
      <Text mt='2' fontSize={['sm', 'md', 'lg']}>{text}</Text>
    </Box>
  )
}

export default HeroComp
