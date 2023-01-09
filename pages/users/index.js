import Header from "../../components/Header";
import NextLink from "next/link";

import { Box, Container, Link } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
};

const Users = ({ users }) => {
  // console.log(users);
  return (
    <>
      <Header title={"Users | Vercel"} desc={"List of Vercel Users"} />
      <Container maxW={"1300px"}>
        {users.map((user) => {
          return (
            <Box key={user.id}>
              <Link as={NextLink} href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Users;
