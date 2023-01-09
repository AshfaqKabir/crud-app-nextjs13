import { UnorderedList, ListItem, Link, Button, Flex } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://63b0227d6a74151a1bba35dd.mockapi.io/todos/tasks"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { todos: data },
  };
};
const TodoList = ({ todos }) => {
  // const todos = await getTodos();
  console.log(todos);
  return (
    <UnorderedList>
      {todos.map((todo) => {
        return (
          <Flex maxW={"600px"} justifyContent="space-between">
            <Link key={todo.id} as={NextLink} href={`/tasks/${todo.id}`}>
              <ListItem>{todo.task}</ListItem>
            </Link>
            <Flex>
              <Button>U</Button>
              <Button>X</Button>
            </Flex>
          </Flex>
        );
      })}
      {/* <ListItem>{todos}</ListItem> */}
      <ListItem>Todo 3</ListItem>
    </UnorderedList>
  );
};

export default TodoList;
