import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const Task = (props) => {
  const { name, isDone, toggleIsDone, index, destroyTask, id } = props;

  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox
        isChecked={isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => {
          toggleIsDone(id,index);
        }}
      >
        <Text>{name}</Text>
      </Checkbox>
      <CloseIcon
        onClick={() => destroyTask(id)}
        _hover={{ opacity: "0.5", cursor: "pointer" }}
      />
    </Flex>
  );
};
