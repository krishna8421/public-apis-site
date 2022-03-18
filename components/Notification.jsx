import { Box, Flex } from "@chakra-ui/react";

function Notification() {
  return (
    <a href="https://github.com/public-apis/public-apis/issues/3104">
        <Flex justify="center" align="center" py={3} borderRadius='lg' mt={5} color="black" fontWeight="semibold"  bgColor="#fbe5ca">
            ⚠️Public APIs Situation [ READ THIS ISSUE PLEASE ]⚠️
        </Flex>
    </a>
  );
}

export default Notification;
