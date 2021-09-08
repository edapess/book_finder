import React, { useEffect } from "react";
import "./category.css";
import { useState } from "react";

const Category = ({changeCat}) => {
  let cats = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];

  return (
    <div>
      <label for="category-choose">Categories</label>
      <select
        name="category"
        className="category-choose"
        onChange={(e) => changeCat(e.target.value)}
      >
        {cats.map((catNames, position) => (
          <option key={position} value={catNames} >
            {catNames}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
