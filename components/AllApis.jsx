import ApiShowBox from "./ApiShowBox";

function AllApis({ AllApiData, searchTerm }) {
  return (
    <>
      {AllApiData.map((apiData) => {
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
    </>
  );
}

export default AllApis;
