import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionButton = motion(Button);

function AllApisBtn({ allApiBtnClickFunc }) {
  const [showAllApis, setShowAllApis] = useState(false);
  const handleChange = () => {
    if (showAllApis === false) {
      setShowAllApis(true);
    }
    if (showAllApis === true) {
      setShowAllApis(false);
    }
    allApiBtnClickFunc(showAllApis);
  };
  return (
    <MotionButton
      rightIcon={showAllApis === false ? <ArrowForwardIcon /> : null}
      leftIcon={showAllApis === true ? <ArrowBackIcon /> : null}
      colorScheme="teal"
      variant="outline"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleChange}
    >
      {showAllApis === false ? <>Browse all APIs</> : <>Back</>}
    </MotionButton>
  );
}

export default AllApisBtn;
