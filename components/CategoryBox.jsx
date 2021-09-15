import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

function CategoryBox({ categoriesName }) {
  return (
    <Link href={"/categories/" + categoriesName.toLowerCase().trim() } passHref>
    <MotionBox
      m={2}
      bgColor="gray.900"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      as="button"
      _hover={{ cursor: "pointer" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <Flex justify="center" align="center" h="4.5rem" w="14rem">
          <a>{categoriesName}</a>
      </Flex>
    </MotionBox>
        </Link>
  );
}

export default CategoryBox;
