import React, { useState, useEffect } from 'react';

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-12 h-12 border-2 border-gray-500 rounded-full pointer-events-none transform z-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-15%, 35%)`, // Custom 1/20 movement on both axes
      }}
    ></div>
  );
};

export default CursorCircle;
