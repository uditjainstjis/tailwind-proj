import React, { useEffect } from 'react';

const ScrollComponent = () => {
  // Function to handle scroll button click
  const handleScroll = () => {
    // Ensure correct use of scrollBy
    window.scrollBy({
      top: 300,        // Scroll down by 300px
      left: 0,         // No horizontal scroll
      behavior: 'smooth' // Smooth scroll effect
    });
  };

  // Scroll resistance effect on mouse wheel scroll
  useEffect(() => {
    const handleScrollResistance = (e) => {
      e.preventDefault(); // Prevent the default scroll behavior

      // Apply resistance factor
      const resistanceFactor = 0.5;
      let newScrollPosition = window.scrollY + e.deltaY * resistanceFactor;

      window.scrollTo({
        top: newScrollPosition,
        left: 0,
        behavior: 'smooth' // Optional smooth scrolling
      });
    };

    // Add the event listener
    window.addEventListener('wheel', handleScrollResistance, { passive: false });

    // Cleanup function to remove the listener when component unmounts
    return () => {
      window.removeEventListener('wheel', handleScrollResistance);
    };
  }, []);

  return (
    <div style={{ height: '2000px', background: 'linear-gradient(to bottom, #f8b500, #f8333c)' }}>
      <button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#fff',
          border: '1px solid #333',
          cursor: 'pointer'
        }}
        onClick={handleScroll}
      >
        Scroll Down
      </button>
    </div>
  );
};

export default ScrollComponent;
