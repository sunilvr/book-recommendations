import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const genreDictionary = {
    Python: [
      {
        name: "Python for Data Analysis: Data Wrangling with Pandas, NumPy",
        rating: "4/5",
        author: "Wes McKinneys"
      },
      {
        name: "Learn Python3 the Hard Way",
        rating: "4.5/5",
        author: "Zed Shaw"
      },
      {
        name: "Learning Python, 5th Edition by Mark Lutz",
        rating: "3.9/5",
        author: "Mark Lutz"
      },
      {
        name: "Head First Python: A Brain-Friendly Guide, by Paul Barry",
        rating: "4/5",
        author: "Paul Barry"
      }
    ],
    Datascience: [
      {
        name: "Approaching (Almost) Any Machine Learning Problem",
        rating: "4/5",
        author: "Abhishek Thakur"
      },
      {
        name: "Data Science and big data analytics",
        rating: "4.5/5",
        author: "Morgan Freeman"
      },
      {
        name: "Practical Statistics for Data Scientists",
        rating: "3.8/5",
        author: "Barry Richards"
      },
      {
        name: "Pattern recognition and machine learning",
        rating: "5/5",
        author: "Christian Bale"
      }
    ],
    Cloud: [
      {
        name: "Cloud Computing: SaaS, PaaS, IaaS, Virtualization and More",
        rating: "4.2/5",
        author: "Kenechukwu Ajufo"
      },
      {
        name: "Cloud Computing Solutions Architect: A Hands-On Approach",
        rating: "5/5",
        author: "Remi Adedokum Adesoji"
      },
      {
        name: "Cloud Computing: Concepts, Technology & Architecture",
        rating: "3.8/5",
        author: "Imram Muhammad"
      },
      {
        name: "AWS Certified Cloud Practitioner Study Guide",
        rating: "4.5/5",
        author: "Stephanek Meranek"
      }
    ],
    Javascript: [
      {
        name: "Eloquent Javascript",
        rating: "5/5",
        author: "Marijn Haverbeke"
      },
      {
        name: "You Don't Know JS: Scope & Closures",
        rating: "4/5",
        author: "Kyle Simpson"
      },
      {
        name: "Javascript and jQuery",
        rating: "3.8/5",
        author: "David Sawyer McFarland"
      },
      {
        name: "Javascript : The Good Parts by Douglas Crockford",
        rating: "4.5/5",
        author: "Douglas Crockford"
      }
    ],
    Java: [
      {
        name: "Java - The Complete Reference by Herbert Schildt",
        rating: "5/5",
        author: "Herbert Schildt"
      },
      {
        name: "Java Performance: The Definite Guide",
        rating: "4.8/5",
        author: "Scott Oaks"
      },
      { name: "Java in a Nutshell", rating: "3.9/5", author: "David Flanagan" },
      {
        name: "Core Java Volume I – Fundamentals",
        rating: "4.5/5",
        author: "Cay S. Horstmann"
      },
      {
        name: "Java Concurrency in Practice by Brian Goetz",
        rating: "3.8/5",
        author: "Brian Goetz"
      }
    ]
  };

  var genre_keys = Object.keys(genreDictionary);
  const [listOfBooks, setGenreList] = useState([]);

  function onClickHandler(genre) {
    setGenreList(genreDictionary[genre]);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>
        <small>Checkout my favorite books. Select a genre to get started</small>
      </p>
      {genre_keys.map((genre) => {
        return (
          <span style={{ fontSize: "2rem", padding: "0.75rem" }} key={genre}>
            <button
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                "background-color": "#BE185D",
                "font-weight": "bold",
                "border-radius": "0.4rem",
                width: "10%"
              }}
              onClick={() => onClickHandler(genre)}
            >
              {genre}
            </button>
          </span>
        );
      })}
      <p>
        {listOfBooks.map((book) => {
          return (
            <ul
              style={{
                fontSize: "1.25rem",
                color: "black",
                border: "0.25rem solid #BE185D",
                width: "50%",
                margin: "0.5rem auto",
                padding: "0.5rem",
                "border-bottom-left-radius": "1rem",
                "border-top-right-radius": "1rem"
              }}
              key={book}
            >
              {book.name}
              <p
                style={{
                  fontSize: "1.1rem"
                }}
              >
                <small>
                  author: {book.author}, rating: {book.rating}
                </small>
              </p>
            </ul>
          );
        })}
      </p>
    </div>
  );
}
