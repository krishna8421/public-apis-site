import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import { useQuery } from 'react-query';
import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get('https://api.publicapis.org/entries')
  return data
}
export default function Home() {
  const { data, status } = useQuery('apiData',fetchData)
  console.log(data  );
  return (
    <Flex justify="center">
      <Box minH="100vh" w="80%">
        <NavBar />
        <Box mt="2rem" display="flex" justifyContent="center">
          <SearchBar />
        </Box>
        {status == 'loading' && (
          <h4>Loading.....</h4>
        )}
                {status == 'success' && (
          <h4>Tadaaaa</h4>
        )}
        {status == 'error' && (
          <h4>error</h4>
        )}
      </Box>
    </Flex>
  );
}
