import React, { useState } from 'react';

const HeroImageWithMouseMove: React.FC = () => {
  const [transform, setTransform] = useState<string>('translate(0, 0) scale(1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY, currentTarget } = e;

    // Get bounding box of the image
    const rect = currentTarget.getBoundingClientRect();

    // Calculate the offset percentage relative to the center of the image
    const xOffset = ((clientX - rect.left) / rect.width - 0.5) * 15; // Movement range -5 to 5
    const yOffset = ((clientY - rect.top) / rect.height - 0.5) * 15;

    // Set the transform style to move the image and apply a slight scale
    setTransform(`translate(${xOffset}px, ${yOffset}px) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    // Reset transform when mouse leaves the image
    setTransform('translate(0, 0) scale(1)');
  };

  return (
    <img
      src="/assets/hero.jpg"
      alt="Scene"
      className="w-full h-[517px] object-cover transition-transform duration-300 ease-out"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default HeroImageWithMouseMove;
