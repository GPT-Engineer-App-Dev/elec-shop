import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="md">ElectroShop</Heading>
          <Flex>
            <Link href="#" p={2}>Home</Link>
            <Link href="#" p={2}>Products</Link>
            <Link href="#" p={2}>About Us</Link>
            <Link href="#" p={2}>Contact Us</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box>
              <Heading size="xl" mb={4}>Featured Product</Heading>
              <Text fontSize="lg" mb={6}>Discover the latest in electronics with our featured product of the month.</Text>
              <Button colorScheme="blue">Shop Now</Button>
            </Box>
            <Image src="https://via.placeholder.com/400" alt="Featured Product" boxSize="400px" objectFit="cover" />
          </Flex>
        </Container>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6}>Our Products</Heading>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <GridItem key={index} bg="white" shadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt={`Product ${index + 1}`} />
                <Box p={4}>
                  <Heading size="md" mb={2}>Product {index + 1}</Heading>
                  <Text mb={4}>Brief description of the product.</Text>
                  <Button colorScheme="blue">View Details</Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex>
              <Link href="#" p={2}><FaFacebook /></Link>
              <Link href="#" p={2}><FaTwitter /></Link>
              <Link href="#" p={2}><FaInstagram /></Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;