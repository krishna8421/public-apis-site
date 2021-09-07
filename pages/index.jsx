import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import CategoryBox from "../components/CategoryBox";
import AllApisLink from "../components/AllApisLink";
import { useQuery } from "react-query";
import axios from "axios";

// Fetch All data at once
const fetchAllData = async () => {
  const { data: AllApiData } = await axios.get(
    "https://api.publicapis.org/entries"
  );
  return AllApiData;
};

//Static fetch Category List every 24hr
export async function getStaticProps() {
  const categoryList = await axios.get("https://api.publicapis.org/categories");
  return {
    props: {
      categoryList: categoryList.data,
      revalidate: 60 * 60 * 24,
    },
  };
}

const Home = (categoryList) => {
  const categoryListName = categoryList.categoryList;
  const { data: AllApiData, status: AllApiDataStatus } = useQuery(
    "apiData",
    fetchAllData
  );

  return (
    <Flex justify="center">
      <Box minH="100vh" w={["95%", "95%", "90%", "85%"]}>
        <NavBar />
        <Box mt={5} display="flex" justifyContent="center">
          <SearchBar />
        </Box>
        <Flex justify="center" mt={5}>
          <AllApisLink status={AllApiDataStatus} />
        </Flex>
        <Box w="100%" mt={7}>
          <Flex justify="center" flexWrap='wrap'>
            {categoryListName.map((category) => (
              <CategoryBox key={category} categoriesName={category} display='inline-flex'/>
            ))}
          </Flex>
        </Box>

        {AllApiDataStatus == "loading" && <h4>Loading.....</h4>}
        {AllApiDataStatus == "success" && <h4>Tadaaaa</h4>}
        {AllApiDataStatus == "error" && <h4>error</h4>}
      </Box>
    </Flex>
  );
};

export default Home;
