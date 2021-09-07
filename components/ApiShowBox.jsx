import { Box, Flex, Button, Icon } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

function ApiShowBox(props) {
  return (
    <Box
      m={2}
      borderWidth="1px"
      borderRadius="1rem"
      overflow="hidden"
      bgColor="gray.900"
    >
      <Flex mt={5} align="center" h="23rem" w="18rem" direction="column">
        <Flex mb={2} w='95%' align="center" justify="center">
          <a href={props.Link}>
            <Text fontSize="2xl">{props.API}</Text>
          </a>
        </Flex>
        <Badge mb={3} colorScheme="purple">
          {props.Category}
        </Badge>
        <Flex w='95%' align="center" justify="center">
        <Text fontSize="sm" mb={10}>
          {props.Description}
        </Text>

        </Flex>
        <Box w="65%">
          <Text fontSize="md">
            Auth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.Auth===''?'No':props.Auth}
          </Text>
          <Divider mb={5} />
          <Text fontSize="md">
            HTTPS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.HTTPS?'Yes':'No'}
          </Text>
          <Divider mb={5} />
          <Text fontSize="md">
            CORS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.CORS==='yes'?'Yes':'No'}
          </Text>
          <Divider mb={5} />
        </Box>
        <a href={props.Link}>
          <Button mt={4} colorScheme="teal" variant="solid">
            Open
          </Button>
        </a>
      </Flex>
    </Box>
  );
}

export default ApiShowBox;
