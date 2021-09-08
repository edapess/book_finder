import React from "react";
import "./searchSection.css";
import { useState } from "react";
import { ReactComponent as Loupe } from "./loupe.svg";
import Category from "../Category/Category";
import { Sorting } from "../Sorting/Sorting";
import axios from "axios";
import FoundSection from "../FoundSection/FoundSection";
const SearchSection = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [subj, setSubj] = useState("");
  const [order, setOrder] = useState("relevance");
  const [apiKey, setApiKey] = useState(
    "AIzaSyBvgkTGh6uctKndG0WPaBtj1eKsbP_RLHw"
  );

  function handleChange(e) {
    e.preventDefault();
    const book = e.target.value;
    setBook(book);
  }

  function handleSubmit() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "+subject:" +
          subj +
          "&orderBy=" +
          order +
          "&key=" +
          apiKey +
          "&maxResults=30"
      )
      .then((data) => {
        setResult(data.data.items);
      });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="search-section">
      <div className="container">
        <h1>Search for books</h1>
        <div className="input-sec">
          <input
            type="text"
            placeholder="book or author name"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          ></input>
          <div className="search">
            <Loupe
              fill="white"
              stroke="green"
              width="25px"
              onClick={(event) => handleSubmit(event)}
            />
          </div>
        </div>
        <div className="sorting-container">
          <Category changeCat={(subj) => setSubj(subj)} />
          <Sorting changeOrder={(ord) => setOrder(ord)} />
        </div>
      </div>

      <FoundSection content={result} />
      

    </div>
  );
};

export default SearchSection;
