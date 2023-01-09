import Header from "../../components/Header";
import NextLink from "next/link";

import { Box, Container, Heading, Link } from "@chakra-ui/react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((data) => {
    return { params: { id: data.id.toString() } };
  });

  return { paths: paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const Details = ({ user }) => {
  return (
    <>
      <Header
        title={` ${user.name} | Vercel User`}
        desc={`This is a description about Vercel User ${user.name}`}
      />
      <Container maxW="1300px">
        <Link as={NextLink} href={"/users"}>
          Go Back
        </Link>
        <Box>
          <Heading>{user.name}</Heading>
          <Heading as="h3">{user.email}</Heading>
        </Box>
      </Container>
    </>
  );
};

export default Details;
