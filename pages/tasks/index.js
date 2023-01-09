import Form from "../../components/Form";
import TodoList from "../../components/TodoList";
import NextLink from "next/link";
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://63b0227d6a74151a1bba35dd.mockapi.io/todos/tasks"
  );

  const data = await res.json();

  return {
    props: { todos: data },
  };
};

const Tasks = ({ todos }) => {
  return (
    <Box>
      <Container maxW={"1300px"}>
        <Form />
        <UnorderedList>
          {/* {todos} */}

          {todos.map((todo) => {
            return (
              <Flex
                maxW={"600px"}
                justifyContent="space-between"
                mb="10px"
                key={todo.id}
              >
                <Link as={NextLink} href={`/tasks/${todo.id}`}>
                  <ListItem>{todo.task}</ListItem>
                </Link>
                <Flex minW="100px" justifyContent={"space-between"}>
                  <Button>U</Button>
                  <Button>X</Button>
                </Flex>
              </Flex>
            );
          })}
          {/* <TodoList /> */}
          {/* <ListItem>{todos}</ListItem> */}
          {/* <ListItem>Todo 3</ListItem> */}
        </UnorderedList>
      </Container>
    </Box>
  );
};

export default Tasks;
