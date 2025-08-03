import React from "react";

const BookDetails = ({ show }) => {
  if (!show) return null;
  return (
    <div>
      <h2>Book Details</h2>
      <h3>Title: The Pragmatic Programmer</h3>
      <p>Author: Andrew Hunt & David Thomas</p>
      <p>Published: October 30, 1999</p>
      <p>
        This book is a classic guide for software developers. It covers a wide
        range of topics, including coding practices, personal responsibility,
        and career development in tech.
      </p>
      <p>
        Known for its practical advice and timeless principles, it’s widely
        recommended for programmers who want to improve not just their code, but
        how they think about development as a craft.
      </p>
    </div>
  );
};

export default BookDetails;
