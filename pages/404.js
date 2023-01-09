import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

const NotFound = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 8000);
  }, []);

  return (
    <Flex justifyContent={"center"} alignItems="center">
      <Box>
        <Heading>Ooops....</Heading>
        <Text>
          Page Not found{" "}
          <Link as={NextLink} href="/">
            Return Home
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default NotFound;
