import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Box,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function SearchBar({ searchTermFunc}) {

  // Handle changes in SearchBar
  const handleChange = (event) => {

  };

  // Close button
  const CloseBtnHandler = () => {

  };
  
  //Search

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
            delay: 0.3,
          },
        },
      }}
    >
      <InputGroup size="lg" variant="filled">
        <InputLeftElement as="Button">
          <AiOutlineSearch />
        </InputLeftElement>
        <InputRightElement as="Button">
          <RiCloseFill onClick={CloseBtnHandler} />
        </InputRightElement>
        <Input
          _focus=""
          placeholder="Search APIs"
        />
      </InputGroup>
    </MotionBox>
  );
}

export default SearchBar;
