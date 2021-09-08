import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import CategoryBox from "../components/CategoryBox";
import ApiShowBox from "../components/ApiShowBox";
import AllApisLink from "../components/AllApisLink";
import Pagination from "../components/Pagination";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

import Main from "../components/Main";

// Fetch All data at once
const fetchAllData = async () => {
  const { data: AllApiData } = await axios.get(
    "https://api.publicapis.org/entries"
  );
  return AllApiData.entries;
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

// Main Page
const Home = (categoryList) => {
  // React Query
  const { data: AllApiData, status: AllApiDataStatus } = useQuery(
    "apiData",
    fetchAllData
  );

  //States
  const [currentPage, setCurrentPage] = useState(1);
  const [apisPerPage] = useState(12);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  // Category Array
  const categoryListName = categoryList.categoryList;

  //Pagination
  const indexOfLastApi = currentPage * apisPerPage;
  const index0fFirstApi = indexOfLastApi - apisPerPage;
  if (AllApiDataStatus === "success") {
    var currentApis = AllApiData.slice(index0fFirstApi, indexOfLastApi);
  }
  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Next/Previous

  //Main UI
  return (
    <Flex justify="center">
      <Box minH="100vh" w={["95%", "95%", "90%", "85%"]}>
        <NavBar />
        <Main/>
      </Box>
    </Flex>
  );
};

export default Home;
