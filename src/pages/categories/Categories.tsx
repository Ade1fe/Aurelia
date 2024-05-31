import { Box, Image, Text } from "@chakra-ui/react"
import { shampoImg } from "../../assets"

const Categories = () => {
  return (
 <Box  className="" mt={['8rem']} maxW='1400px' mx='auto'>
     <Text fontSize={['xl','xx-large']} mb='2rem'> Category</Text>
     <Box display={['grid', 'grid', 'grid', 'flex']} color='white' className="subtitle" gap={['20px', '25px', '30px']} justifyContent='space-between'>
      <Box className="" display={['grid', 'flex']} justifyContent='center' gap={['20px', '25px', '30px']} w={['full', 'full', 'full', '60%']}>
        <Box shadow='md' w={["full",'60%','40%', '50%']} className="" pos='relative' borderRadius='20px' overflow='hidden'>
          <Image w='full' h='full' objectFit='cover' src={shampoImg} />
          <Text pos='absolute' top='10px' left='10px' shadow='md' fontSize={['lg']} bg='rgba(0,0,0,0.2)' px='20px' py='10px' borderRadius="100px" backdropFilter='blur(5px)' className="title">Sunscreen </Text>
          <Text pos='absolute' bottom='0' bg='rgba(0,0,0,0.2)' px='20px' py='10px' w='full' backdropFilter='blur(5px)' fontSize={['md', 'lg']}> Shield your skin from harmful rays</Text>
        </Box>
        <Box shadow='md' w={["full",'60%','40%', '50%']} className="" pos='relative' borderRadius='20px' overflow='hidden'>
          <Image w='full' h='full' objectFit='cover' src={shampoImg} />
          <Text pos='absolute' top='10px' left='10px' shadow='md' fontSize={['lg']} bg='rgba(0,0,0,0.2)' px='20px' py='10px' borderRadius="100px" backdropFilter='blur(5px)' className="title">Shampoo </Text>
          <Text pos='absolute' bottom='0' bg='rgba(0,0,0,0.2)' px='20px' py='10px' w='full' backdropFilter='blur(5px)' fontSize={['md', 'lg']}> Elevate your haircare routine</Text>
        </Box>
      </Box>

      <Box className="" w={['full','100%','80%', '38%']} mx={['0', 'auto', 'auto','0']} display={['grid', 'grid', 'grid', 'flex']} flexDir='column' gap={['20px', '25px', '30px']}>
        <Box className="" display={['grid', 'flex']} gap={['20px', '25px', '30px']} >
          <Box shadow='md' w={['100%','50%']} h={['230px']} className="" pos='relative' borderRadius='20px' overflow='hidden'>
            <Image w='full' h='full' objectFit='cover' src={shampoImg} />
            <Text pos='absolute' top='10px' left='10px' shadow='md' fontSize={['lg']} bg='rgba(0,0,0,0.2)' px='20px' py='10px' borderRadius="100px" backdropFilter='blur(5px)' className="title">Toner </Text>
            <Text pos='absolute' bottom='0' bg='rgba(0,0,0,0.2)' px='20px' py='10px' w='full' backdropFilter='blur(5px)' fontSize={['md', 'lg']}>Refresh your skin</Text>
          </Box>
          <Box shadow='md' w={['100%','50%']} h={['230px']} className="" pos='relative' borderRadius='20px' overflow='hidden'>
            <Image w='full' h='full' objectFit='cover' src={shampoImg} />
            <Text pos='absolute' top='10px' left='10px' shadow='md' fontSize={['lg']} bg='rgba(0,0,0,0.2)' px='20px' py='10px' borderRadius="100px" backdropFilter='blur(5px)' className="title">Serum </Text>
            <Text pos='absolute' bottom='0' bg='rgba(0,0,0,0.2)' px='20px' py='10px' w='full' backdropFilter='blur(5px)' fontSize={['md', 'lg']}> Power of skincare</Text>
          </Box>
        </Box>
        <Box shadow='md' w={['100%', '100%']} h={['230px']} className="" pos='relative' borderRadius='20px' overflow='hidden'>
          <Image w='full' h='full' objectFit='cover' src={shampoImg} />
          <Text pos='absolute' top='10px' left='10px' shadow='md' fontSize={['lg']} bg='rgba(0,0,0,0.2)' px='20px' py='10px' borderRadius="100px" backdropFilter='blur(5px)' className="title">Moisturaizer </Text>
          <Text pos='absolute' bottom='0' bg='rgba(0,0,0,0.2)' px='20px' py='10px' w='full' backdropFilter='blur(5px)' fontSize={['md', 'lg']}> Nourish and Hydrate your skin</Text>
        </Box>
      </Box>
    </Box>
 </Box>
  )
}

export default Categories
