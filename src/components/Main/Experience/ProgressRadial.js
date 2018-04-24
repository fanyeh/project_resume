import React from 'react';
import classNames from 'classnames';
const ProgressRadial = props => {
  const degree = `${360 * ((props.percentage - 50) / 100)}deg`;
  const rotate = {
    transform: `rotate(${degree})`,
  };
  return (
    <div className={classNames('progressRadial radial dib', props.className)}>
      <div className="radial" />
      <div className="radial" style={rotate} />
      <div className="absolute left-0 right-0 tc v-center fw7 near-black ttc">{props.name}</div>
    </div>
  );
};

export default ProgressRadial;
