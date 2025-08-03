import React from "react";

const BlogDetails = ({ show }) => {
  if (!show) return null;
  return (
    <div>
      <h2>Blog Details</h2>
      <h3>Title: Exploring ReactJS</h3>
      <p>Author: Jane Doe</p>
      <p>Date: August 3, 2025</p>
      <p>
        ReactJS is a popular JavaScript library for building user interfaces. It
        enables developers to create reusable UI components and manage
        application state efficiently.
      </p>
      <p>
        In this blog, we explore React features like JSX, hooks, props, and
        conditional rendering. Whether you're a beginner or experienced
        developer, React offers a powerful approach to web development.
      </p>
    </div>
  );
};

export default BlogDetails;
