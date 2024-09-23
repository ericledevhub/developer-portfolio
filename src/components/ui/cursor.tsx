import React, { useState, useEffect } from 'react';

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Initial position outside screen
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // Control visibility

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
      // Make the circle visible after the first mouse move
      setIsVisible(true);
    };

    // Add mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      // Smoothly interpolate the circle's position towards the cursor's position
      setPosition(prevPosition => {
        const lagFactor = 0.4; // Control the lag/smoothness (smaller is more laggy)
        const x = prevPosition.x + (cursorPosition.x - prevPosition.x) * lagFactor;
        const y = prevPosition.y + (cursorPosition.y - prevPosition.y) * lagFactor;
        return { x, y };
      });

      // Continue updating the position on every animation frame
      requestAnimationFrame(updatePosition);
    };

    // Start the animation loop
    requestAnimationFrame(updatePosition);
  }, [cursorPosition]);

  return (
    <div
    className={`fixed w-12 h-12 border-2 border-gray-500 rounded-full pointer-events-none transform z-40 ${
      isVisible ? 'block lg:block' : 'hidden'
    }`}
    
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`, // Center the circle on the cursor
      }}
    ></div>
  );
};

export default CursorCircle;
