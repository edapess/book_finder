import React from "react";
import "./foundSection.css";
const FoundSection = (props) => {
  return (
    <div className="found-section">
      {props.content.map((book) => (
        <div className="cardContainer">
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            alt={book.title}
            key={book.id}
            className="bookCard"
          />
          <div className="infoBox">
            <p className="categoryTitle">{book.volumeInfo.categories}</p>
            <p className="bookTitle">{book.volumeInfo.title}</p>
            <p className="bookAuthor">{book.volumeInfo.authors}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoundSection;
