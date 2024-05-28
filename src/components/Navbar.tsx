import { Box, Icon, Input, Text, useDisclosure } from '@chakra-ui/react'
import { BiSearch, BiUserCircle } from 'react-icons/bi'
import { BsCartDash, BsList, BsX } from 'react-icons/bs' // Import the close icon

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box display={['flex', 'flex']} shadow='md' pos='fixed' top='0' zIndex='9' justifyContent='space-between' alignItems='center' w='full' color='white'>
      <Text textShadow='1px 1px pink' className='tangerine-regular' fontSize={['x-large', 'xx-large', 'xxx-large']}>Aurelia</Text>
      <Box className="title" fontSize={['md', 'lg', 'x-large']} display={['none', 'none', 'flex']}  gap='3'>
        <Text>Home</Text>
        <Text>About us</Text>
        <Text>Shop us</Text>
      </Box>
      <Box display={['none', 'none', 'flex']} gap='3'>
        <Text><Icon as={BiSearch} boxSize={['6', '7', '8']} /></Text>
        <Text><Icon as={BsCartDash} boxSize={['6', '7', '8']} /></Text>
        <Text><Icon as={BiUserCircle} boxSize={['6', '7', '8']} /></Text>
      </Box>
      {isOpen ? ( 
        <Text display={['block', 'block', 'none']} cursor="pointer" onClick={onToggle}><Icon as={BsX} boxSize={[8,9,10]} /></Text>
      ) : ( 
        <Text display={['block', 'block', 'none']} cursor="pointer" onClick={onToggle}><Icon as={BsList} boxSize={[8,9,10]} /></Text>
      )}
      {isOpen && (
        <Box position="absolute" top="100%" right="0" backgroundColor="white" boxShadow="lg" p="4" zIndex="999" w='full' transition="all 0.3s ease-in-out">
          <Text my='0.5rem'>Home</Text>
          <Text my='0.5rem'>About us</Text>
          <Text my='0.5rem'>Shop us</Text>
          <Box my='0.5rem' className="">
            <Input placeholder='search items' />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Navbar