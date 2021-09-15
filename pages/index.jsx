import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import AllCategory from "../components/AllCategory";
import AllApis from "../components/AllApis";
import AllApisBtn from "../components/AllApisBtn";
import Pagination from "../components/Pagination";
import { useState } from "react";

//Static fetch Category List every 24hr
export async function getStaticProps() {
  const categoryListReq = await fetch("https://api.publicapis.org/categories");
  const AllApiDataReq = await fetch("https://api.publicapis.org/entries");
  const categoryList = await categoryListReq.json()
  const AllApiData = await AllApiDataReq.json()
  return {
    props: {
      AllApiData,
      categoryList,
      revalidate: 60 * 60 * 24,
    },
  };
}

//
// Main Page
//
const Home = ({ AllApiData, categoryList }) => {
  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllApis, setShowAllApis] = useState(true);
  //Search
  const searchTermFunc = (searchTermVal) => setSearchTerm(searchTermVal);
  const allApiBtnClickFunc = (showAllApisVal) =>{setShowAllApis(showAllApisVal)}
  //Main UI
  return (
    <Flex justify="center">
      <Box minH="100vh" w={["95%", "95%", "90%", "85%"]}>
        <NavBar />
        <Box mt={5} display="flex" justifyContent="center">
          <SearchBar searchTermFunc={searchTermFunc} />
        </Box>
        <Flex justify="center" mt={5}>
          <AllApisBtn allApiBtnClickFunc={allApiBtnClickFunc} />
        </Flex>
        <Box w="100%" mt={7}>
          <Flex justify="center" flexWrap="wrap">
            {showAllApis === false ? (
              // Do pagination so it can load fast
              // <AllApis AllApiData={AllApiData.entries} searchTerm={searchTerm} />
              <>Working...</>
              ) : (
                <AllCategory categoryList={categoryList} />
            )}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
