import React from 'react';

const HobbyIcon = props => {
  return (
    <div className="">
      <div className="bg-primary hobbyIcon br-100 relative">
        <img src={props.src} alt="" width="55%" className="abs-center" />
      </div>
      <div className="tc mt2 near-dark f5 gray ttc">{props.name}</div>
    </div>
  );
};

export default HobbyIcon;
