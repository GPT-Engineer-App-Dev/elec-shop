import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" mb={4} />
        <Text fontSize="xl" mb={4}>Check out our latest and greatest electronic gadgets!</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={8}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product4.jpg" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook size="24" /></Link>
          <Link href="#" mx={2}><FaTwitter size="24" /></Link>
          <Link href="#" mx={2}><FaInstagram size="24" /></Link>
        </Flex>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;