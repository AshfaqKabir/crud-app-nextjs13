import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";

const Form = () => {
  return (
    <FormControl>
      <FormLabel>Input Todo</FormLabel>
      <Flex>
        <Input type="text" />
        <Button>ADD</Button>
      </Flex>
    </FormControl>
  );
};

export default Form;
