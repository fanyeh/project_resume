import React from 'react';
import Thumbnail from './Thumbnail';
const Header = () => {
  return (
    <header className="bg-primary white garamond ph5-l ph4-m pv4 flex justify-between items-center flex-column flex-row-ns">
      <div>
        <h1 className="dib f1 fw7 ma0 ttc">john doe</h1>
        <h1 className="f5 fw1 helvetica mv1 tracked tl-ns tc">Web Developer</h1>
      </div>
      <Thumbnail />
    </header>
  );
};

export default Header;
