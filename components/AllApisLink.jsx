import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

function AllApisLink(props) {
  return (
    <MotionButton
      isLoading={props.status === "loading" ? true : false}
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Browse all APIs
    </MotionButton>
  );
}

export default AllApisLink;
