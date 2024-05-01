import React, { useRef } from 'react';
import './App.css';

const App = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100; // Adjust scroll amount as needed
    }
  };

  return (
    <>
    <div className="scroll-container" ref={scrollRef}>
      <div className="scroll-item">Item 1</div>
      <div className="scroll-item">Item 2</div>
      <div className="scroll-item">Item 3</div>
      <div className="scroll-item">Item 4</div>
      <div className="scroll-item">Item 5</div>
      <div className="scroll-item">Item 6</div>
      <div className="scroll-item">Item 7</div>
      <div className="scroll-item">Item 8</div>
      <div className="scroll-item">Item 9</div>
      </div>
      <div className="scroll-buttons">
          <button className="scroll-button" onClick={scrollLeft}>Scroll Left</button>
          <button className="scroll-button" onClick={scrollRight}>Scroll Right</button>
    </div>
    </>
  );
}

export default App;
