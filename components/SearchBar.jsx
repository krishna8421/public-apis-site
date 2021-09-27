import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function SearchBar({ AllApiData, searchData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  // Handle changes in SearchBar
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    searchData(searchedList, event.target.value);
  };

  // Close button
  const CloseBtnHandler = () => {
    document.getElementById("input").value = "";
  };

  function filterItems(apiArray, query) {
    return apiArray.filter(
      (val) => val.API.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  useEffect(() => {
    if (AllApiData) {
      setSearchedList(filterItems(AllApiData, searchTerm));
    }
  }, [AllApiData, searchTerm]);

  return (
    <MotionBox
      w="25rem"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <InputGroup size="lg" variant="filled">
        <InputLeftElement as="Button">
          <AiOutlineSearch />
        </InputLeftElement>
        <InputRightElement as="Button" onClick={CloseBtnHandler}>
          <RiCloseFill />
        </InputRightElement>
        <Input
          id="input"
          _focus=""
          placeholder="Search APIs"
          onChange={handleChange}
        />
      </InputGroup>
    </MotionBox>
  );
}

export default SearchBar;
