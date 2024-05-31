import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { lotionImg } from '../../assets'

const ProductCard = () => {
  return (
    <Box pos='relative'borderRadius='20px' overflow='hidden' w={['250px']}_hover={{shadow: "base"}} >

        <Box pos='absolute' top='0'   className="" display='flex' w='full' justifyContent='space-between'>
            <Text className="" bg='yellow.400' borderRightRadius='50%' px='10px' fontSize={['lg', 'x-large']}>15</Text>
            <Text className="" color='white' pt='5px' px='5px'> <Icon as={BiHeart} boxSize={[6,7,]} /> </Text>
        </Box>

      <Box className="" borderRadius='20px' overflow='hidden' boxSize={['250px']}>   <Image w='full' h='full' objectFit='cover' src={lotionImg} /> </Box>
      <Box className="" pb='20px'  mt='1rem' px='20px'>
        <Text noOfLines={1} fontSize={['md', 'lg']}>Night serumor senstivite skin </Text>
        <Text fontSize={['sm', 'lg']} color='green.400'> $ 70.20 </Text>
      </Box>
    </Box>
  )
}

export default ProductCard
