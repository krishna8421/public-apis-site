import ApiShowBox from "./ApiShowBox";
import Pagination from "../components/Pagination";
import { useState } from "react";

function AllApis({ AllApiData }) {
  //States
  const [currentPage, setCurrentPage] = useState(1);
  const [apisPerPage] = useState(12);

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  //Pagination
  const indexOfLastApi = currentPage * apisPerPage;
  const index0fFirstApi = indexOfLastApi - apisPerPage;

  const currentApis = AllApiData.slice(index0fFirstApi, indexOfLastApi);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next/Previous
  const nextPage = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
    if (pageNumber + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }

  };
  const previousPage = (pageNumber) => {
    if (pageNumber === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber - 1);
      if ((pageNumber - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  return (
    <>
      {currentApis.map((apiData) => {
        const { API, Auth, Cors, Category, Description, HTTPS, Link } = apiData;
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
      <Pagination
        apisPerPage={apisPerPage}
        totalApis={AllApiData.length}
        paginate={paginate}
        currentPage={currentPage}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
}

export default AllApis;
