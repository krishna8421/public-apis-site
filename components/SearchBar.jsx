import { InputGroup, InputLeftElement, Input, Box } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
function SearchBar() {
  return (
    <Box mt="2rem" display="flex" justifyContent="center" >
      <InputGroup size="lg" variant="filled" maxW="30rem" >
        <InputLeftElement pointerEvents="none">
          <AiOutlineSearch />
        </InputLeftElement>
        <Input _focus='' placeholder="Search APIs" />
      </InputGroup>
    </Box>
  );
}

export default SearchBar;
