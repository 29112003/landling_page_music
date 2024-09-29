import React from 'react';
import TextWithStroke from './TextWithStroke';
import CircleDiv from './CircleDiv';

const PlaySection = () => {
  return (
    <div className="flex px-20 bg-[#EAEAEA]  overflow-hidden h-[375px] items-center justify-between">
      <div className="mb-0">
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
      </div>
      
      <CircleDiv />
      
      <div className="mb-20">
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
        <TextWithStroke text="PLAY" strokeColor="#FFB902" />
      </div>
    </div>
  );
};

export default PlaySection;
