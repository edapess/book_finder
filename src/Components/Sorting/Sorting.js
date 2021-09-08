import React from "react";
import "./sorting.css";
import { useState } from "react";

export const Sorting = ({ changeOrder }) => {
  let orderOpts = ["relevance", "newest"];

  const [sorting, setSorting] = useState(orderOpts[0]);

  return (
    <div>
      <label for="sorting">Sorting by</label>
      <select
        name="sorting"
        className="sorting"
        onChange={(e) => changeOrder(e.target.value)}
      >
        {orderOpts.map((val, pos) => (
          <option value={val} key={pos}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};
