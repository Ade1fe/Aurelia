import { Box, Image, Text, Flex, Icon } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai"; // Import star icon from react-icons library

const FeedbackComp = () => {
  return (
    <Flex justifyContent="space-between">
      {/* Review 1 */}
      <Box width="30%" p={4} boxShadow="md" borderRadius="md">
   
        <Text fontSize="xl" fontWeight="bold" mt={4}>Excellent service!</Text>
        <Text fontSize="md" mt={2}>
          The service provided was exceptional. The staff was friendly and helpful, and the quality of the product exceeded my expectations. Will definitely recommend!
        </Text>
        <Box className="">
        <Image src="/path/to/image1.jpg" alt="Feedback" />
        <Text fontSize="sm" color="gray.500">John Doe</Text>
        </Box>
        <Flex mt={2}>
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="gray.300" />
        </Flex>
      </Box>

      {/* Review 2 */}
      <Box width="30%" p={4} boxShadow="md" borderRadius="md">
      
        <Text fontSize="xl" fontWeight="bold" mt={4}>Great experience!</Text>
        <Text fontSize="md" mt={2}>
          I had a great experience with this company. The product was delivered on time, and the customer service was excellent. Highly recommended!
        </Text>
        <Box className="">
        <Image src="/path/to/image2.jpg" alt="Feedback" />
        <Text fontSize="sm" color="gray.500">Jane Smith</Text>
        </Box>
        <Flex mt={2}>
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="gray.300" />
          <Icon as={AiFillStar} color="gray.300" />
        </Flex>
      </Box>

      {/* Review 3 */}
      <Box width="30%" p={4} boxShadow="md" borderRadius="md">
      
        <Text fontSize="xl" fontWeight="bold" mt={4}>Outstanding quality!</Text>
        <Text fontSize="md" mt={2}>
          I am highly impressed with the quality of the product. It exceeded my expectations, and I couldn't be happier with my purchase. Thank you!
        </Text>
        <Box className="">
        <Image src="/path/to/image3.jpg" alt="Feedback" />
        <Text fontSize="sm" color="gray.500">Alex Johnson</Text>
        </Box>
        
        <Flex mt={2}>
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
          <Icon as={AiFillStar} color="yellow.400" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default FeedbackComp;
