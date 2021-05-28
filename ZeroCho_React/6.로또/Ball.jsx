import React, { memo } from 'react';

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'lightpink';
  } else if (number <= 20) {
    background = 'peachpuff';
  } else if (number <= 30) {
    background = 'lemonchiffon';
  } else if (number <= 40) {
    background = 'powderblue';
  } else {
    background = 'palegreen';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

export default Ball;
