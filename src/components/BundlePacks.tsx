import { Box, Button, Image, Text } from '@chakra-ui/react'
import { sectImg } from '../assets'

const BundlePacks = () => {
  return (
 <Box className="" maxW='1400px' mx='auto' mt='8rem'>
       <Box pos='relative' shadow='base' h={['full', 'full', '450px', '550px']} borderRadius='20px' overflow='hidden'>
        <Image w='full' h='full' objectFit='cover' src={sectImg} />
        <Box className=""
         position='absolute'
         bottom={['20px',  '30%']}
         w={[ 'max-content']}
         bg='rgba(255,255,255,0.05)'
         backdropFilter='blur(5px)'
         borderRadius='20px'
         py={['20px', '40px']}
         px='20px'
        >
            <Text my='1rem' fontSize={[ 'lg', 'x-large','xx-large']}>Bundle Pack </Text>
            <Text mb='0.6rem' fontSize={[ 'x-large', 'xx-large','xxx-large']}>Disc Up To 70% </Text>
            <Button border='2px solid #7F5539' px='20px' bg='transparent' _hover={{bg: "#7F5539", color: "white"}} mb="1rem" fontSize={['lg']}>Shop Now </Button>
        </Box>
    </Box>
 </Box>
  )
}

export default BundlePacks
