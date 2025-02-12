import React, { useEffect, useState } from "react";

interface CounterProps {
  countTo: number;
}

const Counter: React.FC<CounterProps> = ({ countTo }) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const _class = `count oldstyle-nums transition-opacity duration-5000 ${visible ? "opacity-100" : "opacity-0"}`;
  
    useEffect(() => {
      setTimeout(() => setVisible(true), 0); // Show with fade-in effect
    }, []);
  
    useEffect(() => {
      let start = 0;
      const duration = 3000;
      const increment = countTo / (duration / 16);
  
      const animateCount = () => {
        start += increment;
        if (start < countTo) {
          setCount(Math.floor(start));
          requestAnimationFrame(animateCount);
        } else {
          setCount(countTo); // Format with commas
        }
      };
  
      animateCount();
    }, [countTo]);
  
    return (
      <h1 className={_class}>
        {count}
      </h1>
    );
};

export default Counter;