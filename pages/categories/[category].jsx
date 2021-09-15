import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ApiShowBox from "../../components/ApiShowBox";
import NavBar from "../../components/NavBar";
import { Box, Flex } from "@chakra-ui/react";
import { Spinner, Button } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Footer from "../../components/Footer";

const MotionButton = motion(Button);

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const [categoryItems, setCategoryItems] = useState(null);

  const getCategory = async (category) => {
    const categoryListItemReq = await fetch(
      "https://api.publicapis.org/entries?category=" + encodeURI(category)
    );
    const data = await categoryListItemReq.json();
    setCategoryItems(data.entries);
  };

  useEffect(() => {
    getCategory(category);
  }, [category]);

  return (
    <Flex justify="center" direction="column" minH="100vh">
      <Box minH="100vh" w={["95%", "95%", "90%", "85%"]} m="auto" mt={0}>
        <NavBar />
        <Box w="100%" mt={7}>
          <Flex justify="center" mt={5} mb={5}>
            <Link href="/" passHref>
              <MotionButton
                leftIcon={<ArrowBackIcon />}
                colorScheme="teal"
                variant="outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back
              </MotionButton>
            </Link>
          </Flex>
          <Flex justify="center" flexWrap="wrap">
            {categoryItems === null ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="purple.600"
                size="xl"
              />
            ) : (
              categoryItems.map((apiData) => {
                const { API, Auth, Cors, Category, Description, HTTPS, Link } =
                  apiData;
                return (
                  <ApiShowBox
                    key={Link}
                    API={API}
                    Auth={Auth}
                    CORS={Cors}
                    Category={Category}
                    Description={Description}
                    HTTPS={HTTPS}
                    Link={Link}
                  />
                );
              })
            )}
          </Flex>
        </Box>
      </Box>
      <Box mt="2rem">
        <Footer />
      </Box>
    </Flex>
  );
}

export default Category;
