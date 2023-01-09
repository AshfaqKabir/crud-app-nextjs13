import { Container, Flex, Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Container maxW={"600px"} minH="64px" py="16px">
      <Flex justifyContent="space-around">
        <Box>
          <Image src="/NextLogo.png" width={24} height={24} />
        </Box>
        <Flex minW={"400px"} justifyContent="space-between">
          <Link as={NextLink} href={"/"}>
            Home
          </Link>
          <Link as={NextLink} href={"/about"}>
            About
          </Link>
          <Link as={NextLink} href={"/users"}>
            Users
          </Link>
          <Link as={NextLink} href={"/tasks"}>
            Tasks
          </Link>
          <Link as={NextLink} href={"/comments"}>
            Comments
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
