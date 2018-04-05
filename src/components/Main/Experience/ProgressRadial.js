import React from 'react';

const ProgressRadial = props => {
  const degree = `${360 * ((props.percentage - 50) / 100)}deg`;
  const rotate = {
    transform: `rotate(${degree})`,
  };
  return (
    <div className="progressRadial radial dib">
      <div className="radial" />
      <div className="radial" style={rotate} />
      <div className="absolute left-0 right-0 tc v-center f6 fw7 near-black ttc">{props.name}</div>
    </div>
  );
};

export default ProgressRadial;
