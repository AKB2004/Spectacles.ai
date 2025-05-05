import React from 'react'


const HeroSection= () => {
  const backgroundStyle = {
    backgroundImage: `url('/public/image2.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '700px',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default HeroSection
