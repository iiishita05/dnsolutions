import React from "react";

const CourseDetails = ({ show }) => {
  if (!show) return null;
  return (
    <div>
      <h2>Course Details</h2>
      <h3>Course: Full-Stack Web Development</h3>
      <p>Instructor: Mr. Arjun Mehta</p>
      <p>Duration: 12 Weeks</p>
      <p>
        This course covers both front-end and back-end development using tools
        like HTML, CSS, JavaScript, React, Node.js, and MongoDB.
      </p>
      <p>
        It’s designed for beginners and intermediate learners who want to build
        real-world web applications from scratch and understand how modern web
        technologies work together.
      </p>
    </div>
  );
};

export default CourseDetails;
