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
      <Flex align="center" h="23rem" w="18rem" direction="column">

        {/* API Name */}
        <Flex w='95%' align="center" justify="center">
          <center>
            <a href={props.Link}>
              <Text my={3} fontSize={(props.API).length> 20?'1rem':'1.5rem'} >{props.API}</Text>
            </a>
          </center>
        </Flex>

        {/* API Category */}
        <Badge mb={3} colorScheme="purple">
          {props.Category}
        </Badge>

        {/* API Description */}
        <Flex w='95%'  justify="center"  h={72}>
          <center>
            <Text fontSize="sm" sx={{ overflowWrap: 'break-word' }} overflow='hidden'>
              {props.Description}
            </Text>
          </center>
        </Flex>

        {/* API Details */}
        <Box w="65%">
          <Text fontSize="md" ml={2}>
            Auth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.Auth===''?'No':props.Auth}
          </Text>
          <Divider mb={5} />
          <Text fontSize="md" ml={2}>
            HTTPS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.HTTPS?'Yes':'No'}
          </Text>
          <Divider mb={5} />
          <Text fontSize="md" ml={2}>
            CORS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.CORS==='yes'?'Yes':'No'}
          </Text>
          <Divider mb={5} />
        </Box>

        {/* API Open Button */}
        <a href={props.Link}>
          <Box h={55}>
          <Button colorScheme="teal" variant="solid">
            Open
          </Button>
          </Box>
        </a>
      </Flex>
    </Box>
  );
}

export default ApiShowBox;
