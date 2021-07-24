import React from "react";
import "./index.css";

const Search = (props) => {
  const img = `https://source.unsplash.com/300x400/?${props.img}`;
  return (
    <>
      <div>
        <img src={img} alt="img" id="karna" />
      </div>
    </>
  );
};

export default Search;
