// How Props Work:
// Props are how you pass data to components.
// In TextWithStroke, we're passing the text and strokeColor as props so that
// the same component can display different text and have different stroke colors.
// <TextWithStroke text="PLAY" strokeColor="#FFB902" />
// text="PLAY" passes the text.
// strokeColor="#FFB902" passes the color of the stroke.

import React from 'react';

const TextWithStroke = ({ text, strokeColor }) => {
  return (
    <h1
      className="text-7xl font-bold text-transparent bg-clip-text"
      style={{ WebkitTextStroke: `2px ${strokeColor}`, color: 'transparent' }}
    >
      {text}
    </h1>
  );
};

export default TextWithStroke;
