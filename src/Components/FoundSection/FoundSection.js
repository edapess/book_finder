import React from "react";
import "./foundSection.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const FoundSection = (props) => {
const [visible, setvisible] = useState(10)

const showMoreBooks = ()=> {
  setvisible((prevVal)=> prevVal +10)
}

  return (
    <div className="found-section">
      {props.content.slice(0,visible).map((book) => (
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
<div className="loadMore">
<button onClick={showMoreBooks}>Load More</button>

</div>
    </div>
  );
};

export default FoundSection;
