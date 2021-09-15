import { Box, Flex,Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box  mt='auto' mx='auto' w={["95%", "95%", "90%", "85%"]} borderTopWidth="3px" borderColor="purple.600">
      <Flex my={8} justify="center" align="center">
        <Text fontSize="md"  >Made with ❤️ by Krishna</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
