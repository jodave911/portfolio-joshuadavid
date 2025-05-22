import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      cursor.style.transform = `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(animate);
    };

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', mouseMove);
    animate();

    return () => document.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white pointer-events-none z-50 mix-blend-difference transition-all duration-150"
      style={{
        transform: 'translate(-50%, -50%) translate3d(0, 0, 0)',
        transitionTimingFunction: 'ease-out',
      }}
    />
  );
};

export default CustomCursor;
