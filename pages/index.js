import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <Flex justify="center">
      <Box minH="100vh" w="80%">
        <NavBar />
        <SearchBar />
      </Box>
    </Flex>
  );
}
