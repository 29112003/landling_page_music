import React from 'react';

const TitleSection = () => {
  return (
    <div className="w-min-screen bg-[#EAEAEA] text-center">
      <h1 className="text-[60px] font-bold tracking-tighter">Explore Your</h1>
      <h1
        className="text-8xl  mt-[-20px]  font-bold text-transparent bg-clip-text"
        style={{ WebkitTextStroke: '2px black', color: 'transparent' }}
      >
        MUSIC
      </h1>
      <button className="uppercase text-white text-xl font-bold bg-[#FFB902] px-4 py-1 rounded-full border-2 border-black">
        LEARN MORE
      </button>
    </div>
  );
};

export default TitleSection;
