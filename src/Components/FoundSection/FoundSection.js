import React from "react";
import "./foundSection.css";
import { Link } from "react-router-dom";
const FoundSection = (props) => {

  return (
    <div className="found-section">
      {props.content.map((book) => (
        <Link  key={book.id} to={{pathname:"/book_info" ,state:book}}>
        <div className="cardContainer" >
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
        
      </Link>
      ))}
    </div>
  );
};

export default FoundSection;
