import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const TypeWriterText = () => {
  const { text } = Typewriter({
    words: ['Software Engineer', 'Web Developer'],
    loop: {},
    typeSpeed: 120
  });

  return (
    <h1> 
      And I'm a  {''}
      {/* <span style={{ fontWeight: 'bold', color: 'green' }}>
        {text}
      </span> */}
      <Typewriter 
        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        // onLoopDone={handleDone} // Remove this line, it's causing the error
        // onType={handleType} // Remove this line, it's causing the error
      />
      <span style = {{color: 'red'}}>
        <Cursor />
      </span>
    </h1>
  );
};

export default TypeWriterText;