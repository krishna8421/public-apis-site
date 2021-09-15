import ApiShowBox from "./ApiShowBox";

function AllApis({ AllApiData,searchTerm }) {
  return (
    <>
      {AllApiData.filter((val) => {
        if (val.API.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((apiData) => {
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


    </>
  );
}

export default AllApis;
