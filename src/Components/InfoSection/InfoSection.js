import React from "react";
import "./infoSection.css";
import { useState, useEffect } from "react";

const InfoSection = (props) => {
  const [info, setinfo] = useState([]);
  const [thumb, setThumb] = useState(
    "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  );
  const [categoryInfo, setcategoryInfo] = useState("");
  const [bookTitle, setbookTitle] = useState("");
  const [authorInfo, setauthorInfo] = useState("");
  const [description, setdescription] = useState("");
  useEffect(() => {
    if (props.location.state) {
      async function returnData() {
        let result = await props.location.state;

        setinfo(result);
        setThumb(result.volumeInfo.imageLinks.thumbnail);
        setcategoryInfo(result.volumeInfo.categories);
        setbookTitle(result.volumeInfo.title);
        setauthorInfo(result.volumeInfo.authors);
        setdescription(result.volumeInfo.description);
      }
      returnData();
      // let result =  props.location.state
    } else {
      console.log("no info");
    }
  }, [info]);
  console.log("info:", info);

  // console.log('info',info.volumeInfo.imageLinks.thumbnail);
  return (
    <div className="bookInfo-sec">
      <div className="bookImg">
        <img className="book-thumb" src={thumb} alt="book image" />
      </div>
      <div className="description">
        <div className="infoBox">
          <div className="categoryInfo">Category: {categoryInfo}</div>
          <div className="titleInfo">Title: {bookTitle}</div>
          <div className="authorInfo">Author: {authorInfo}</div>
          <div className="descInfo">Description: {description}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
