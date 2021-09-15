import CategoryBox from "./CategoryBox";

function AllCategory({ categoryList }) {
  return (
    <>
      {categoryList.map((category) => (
        <CategoryBox
          key={category}
          categoriesName={category}
          display="inline-flex"
        />
      ))}
    </>
  );
}

export default AllCategory;
