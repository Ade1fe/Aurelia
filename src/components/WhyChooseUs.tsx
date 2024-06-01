import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { GiAcidTube, GiPlantSeed } from 'react-icons/gi'
import { SiAnimalplanet } from 'react-icons/si'

const WhyChooseUs = () => {
  return (
   <Box className="brown" maxW='1400px' py='5rem' mx='auto'  borderRadius='20px' mt='8rem' >
     <Box maxW='1200px' mx='auto'>
        <Box maxW='800px' mx='auto' className="" textAlign='center' mb='3rem'>
        <Text textTransform='uppercase' className="title" mb='0.5rem' fontSize={['x-large', 'x-large','xx-large']}>why choose us</Text>
        <Text  className="subtitle" fontSize={['md', 'lg',]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic animi deserunt eaque maxime culpa nobis facilis aspernatur quod numquam perferendis?</Text>
        </Box>
        <Box display='flex' flexWrap='wrap' gap={['20px','30px','40px']} justifyContent='center' className="">

            <Box className="" bg='white' borderRadius='10px'  w={[ '400px', '360px', '340px',  ]}  p={['20px']} shadow='base'>
            <Icon as={GiPlantSeed} boxSize={[6,7,8]} color='green' />
            <Text className="title" fontSize={['lg', 'x-large']} mb='0.3rem'>Premium Natural Ingredients</Text>
                <Text className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quasi debitis fugit nam vero, molestias tenetur optio perferendis! Expedita, officia sed non ullam minus tempora blanditiis eum aliquam fugit dolor!</Text>
            </Box>
            <Box className="" bg='white' borderRadius='10px' w={[ '400px', '360px', '340px',  ]} p={['20px']} shadow='base'>
            <Icon as={GiAcidTube}  boxSize={[6,7,8]} color='green' />
            <Text className="title" fontSize={['lg', 'x-large']} mb='0.3rem'>Scientifical-Backend formulatiom</Text>
                <Text className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quasi debitis fugit nam vero, molestias tenetur optio perferendis! Expedita, officia sed non ullam minus tempora blanditiis eum aliquam fugit dolor!</Text>
            </Box>
            <Box className="" bg='white' borderRadius='10px' w={[ '400px', '360px', '340px',  ]}  p={['20px']} shadow='base'>
            <Icon as={SiAnimalplanet} boxSize={[6,7,8]} color='green' />
            <Text className="title" fontSize={['lg', 'x-large']} mb='0.3rem'>Transparent and ethical practices</Text>
                <Text className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quasi debitis fugit nam vero, molestias tenetur optio perferendis! Expedita, officia sed non ullam minus tempora blanditiis eum aliquam fugit dolor!</Text>
            </Box>
        </Box>
      
    </Box>
   </Box>
  )
}

export default WhyChooseUs
