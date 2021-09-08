import { Box, Flex } from "@chakra-ui/react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CategoryBox from "./CategoryBox";
import ApiShowBox from "./ApiShowBox";
import AllApisLink from "./AllApisLink";
import Pagination from "./Pagination";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

// Fetch All data at once
const fetchAllData = async () => {
  const { data: AllApiData } = await axios.get(
    "https://api.publicapis.org/entries"
  );
  return AllApiData.entries;
};

// Fetch All data at once
const fetchCategoryData = async () => {
    const { data: categoryList } = await axios.get(
      "https://api.publicapis.org/categories"
    );
    return categoryList;
  };
  

//Static fetch Category List every 24hr
// export async function getStaticProps() {
//   const categoryList = await axios.get("https://api.publicapis.org/categories");
//   return {
//     props: {
//       categoryList: categoryList.data,
//       revalidate: 60 * 60 * 24,
//     },
//   };
// }

// Main Page
const Main = () => {
  // React Query
  const { data: AllApiData, status: AllApiDataStatus } = useQuery(
    "apiData",
    fetchAllData
  );
  const { data: categoryList, status: categoryListStatus } = useQuery(
    "categoryData",
    fetchCategoryData
  );


  //States
  const [currentPage, setCurrentPage] = useState(1);
  const [apisPerPage] = useState(12);

  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Category Array
  //const categoryListName = categoryList.categoryList;

  //Pagination
  const indexOfLastApi = currentPage * apisPerPage;
  const index0fFirstApi = indexOfLastApi - apisPerPage;
  if (AllApiDataStatus === "success") {
    var currentApis = AllApiData.slice(index0fFirstApi, indexOfLastApi);
  }
  

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next/Previous

  //Search
  const searchTermFunc = (searchTermVal) => setSearchTerm(searchTermVal);

  
  //Main Logic

  if(searchTerm!==''){
      return(
        <>
        <Box mt={5} display="flex" justifyContent="center">
          <SearchBar searchTermFunc={searchTermFunc} />
        </Box>
  
        <Flex justify="center" mt={5}>
          <AllApisLink status={AllApiDataStatus} />
        </Flex>
  
        <Box w="100%" mt={7}>
          <Flex justify="center" flexWrap="wrap">
            {AllApiDataStatus === "loading"
              ? "Loading..."
              : AllApiData.filter(val=>{
                  if(val.API.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                  }
              }).map((apiData) => {
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
                })}
            {/* {AllApiDataStatus === "success" ? (
              <Pagination
                apisPerPage={apisPerPage}
                totalApis={AllApiData.length}
                paginate={paginate}
                currentPage={currentPage}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
              />
            ) : (
              ""
            )} */}
          </Flex>
        </Box>
      </>
      )
  }

if(searchTerm===''){

    return (
        <>
      <Box mt={5} display="flex" justifyContent="center">
        <SearchBar searchTermFunc={searchTermFunc} />
      </Box>

      <Flex justify="center" mt={5}>
        <AllApisLink status={AllApiDataStatus} />
      </Flex>

      <Box w="100%" mt={7}>
        <Flex justify="center" flexWrap="wrap">
          {categoryListStatus === "loading"
              ? "Loading..."
              :categoryList.map((category) => (
              <CategoryBox key={category} categoriesName={category} display='inline-flex'/>
              ))}

          {/* {AllApiDataStatus === "success" ? (
              <Pagination
              apisPerPage={apisPerPage}
              totalApis={AllApiData.length}
              paginate={paginate}
              currentPage={currentPage}
              maxPageNumberLimit={maxPageNumberLimit}
              minPageNumberLimit={minPageNumberLimit}
              />
              ) : (
                  ""
                )} */}
        </Flex>
      </Box>
    </>
  );
}
};

export default Main;
