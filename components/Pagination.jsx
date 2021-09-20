import { Flex, Button, Icon } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

// Pagination Component
const Pagination = ({
  apisPerPage,
  totalApis,
  paginate,
  currentPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalApis / apisPerPage); i++) {
    pageNumbers.push(i);
  }

  const PageButton = (props) => {
    const activeStyle = {
      bg: "teal.400",
      color: "gray.100",
    };
    return (
      <Button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg="gray.900"
        borderColor="gray.600"
        borderWidth="1px"
        color="gray.200"
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active === true && activeStyle)}
      >
        {props.children}
      </Button>
    );
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex>
        <a onClick={() => previousPage(currentPage)}>
          <PageButton isDisabled={true}>
            <Icon as={IoIosArrowBack} color="gray.200" boxSize={4} />
          </PageButton>
        </a>

        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <a key={number} onClick={() => paginate(number)}>
                <PageButton active={currentPage === number ? true : null}>
                  {number}
                </PageButton>
              </a>
            );
          } else {
            return null;
          }
        })}

        <a onClick={() => nextPage(currentPage)}>
          <PageButton>
            <Icon as={IoIosArrowForward} color="gray.200" boxSize={4} />
          </PageButton>
        </a>
      </Flex>
    </Flex>
  );
};

export default Pagination;
