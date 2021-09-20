import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import AllCategory from "../components/AllCategory";
import AllApis from "../components/AllApis";
import AllApisBtn from "../components/AllApisBtn";
import { useState } from "react";
import Footer from "../components/Footer";
import ApiShowBox from "../components/ApiShowBox";

//Static fetch Category List every 24hr
export async function getStaticProps() {
  const categoryListReq = await fetch("https://api.publicapis.org/categories");
  const AllApiDataReq = await fetch("https://api.publicapis.org/entries");
  const categoryList = await categoryListReq.json();
  const AllApiData = await AllApiDataReq.json();
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
  const [searchedList, setSearchedList] = useState([]);
  const [searchedListOrigLength, setSearchedListOrigLength] = useState(0);

  // Show all Api
  const allApiBtnClickFunc = (showAllApisVal) => setShowAllApis(showAllApisVal);

  // Search Data Array
  const searchData = (searchArray, searchTerm) => {
    setSearchedListOrigLength(searchArray.length);
    setSearchedList(searchArray.slice(0, 30));
    setSearchTerm(searchTerm);
  };

  // Search or Show a Category
  const searchOrCategory = () => {
    if (
      searchedListOrigLength === AllApiData.entries.length ||
      searchedListOrigLength === 0 ||
      searchTerm === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Main UI
  return (
    <Flex justify="center" direction="column" minH="100vh">
      <Box w={["95%", "95%", "90%", "85%"]} m="auto" mt={0}>
        <NavBar />
        <Box mt={5} display="flex" justifyContent="center">
          <SearchBar AllApiData={AllApiData.entries} searchData={searchData} />
        </Box>
        {searchOrCategory() ? (
          <>
            <Flex justify="center" mt={5}>
              <AllApisBtn allApiBtnClickFunc={allApiBtnClickFunc} />
            </Flex>
            <Box w="100%" mt={7}>
              <Flex justify="center" flexWrap="wrap">
                {showAllApis === false ? (
                  <AllApis AllApiData={AllApiData.entries} />
                ) : (
                  <AllCategory categoryList={categoryList} />
                )}
              </Flex>
            </Box>
          </>
        ) : (
          <>
            <Box w="100%" mt={7}>
              <Flex justify="center" flexWrap="wrap">
                {searchedList.map((apiData) => {
                  const {
                    API,
                    Auth,
                    Cors,
                    Category,
                    Description,
                    HTTPS,
                    Link,
                  } = apiData;
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
                })}
              </Flex>
            </Box>
          </>
        )}
      </Box>
      <Box mt="2rem">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Home;
