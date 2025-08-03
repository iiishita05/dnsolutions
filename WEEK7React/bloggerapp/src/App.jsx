import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [visible, setVisible] = useState('book');

  return (
    <div>
      <h1>BLOGGER APP</h1>
      <button onClick={() => setVisible('book')}>Show Book</button>
      <button onClick={() => setVisible('blog')}>Show Blog</button>
      <button onClick={() => setVisible('course')}>Show Course</button>
      <BookDetails show={visible === 'book'} />
      <BlogDetails show={visible === 'blog'} />
      <CourseDetails show={visible === 'course'} />
    </div>
  );
}

export default App;