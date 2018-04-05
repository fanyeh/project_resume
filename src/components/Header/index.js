import React from 'react';
import Thumbnail from './Thumbnail';
const Header = () => {
  return (
    <header className="bg-primary white garamond ph6 pv4 flex justify-between items-center">
      <div>
        <h1 className="dib f1 fw7 ma0 ttc">john doe</h1>
        <h1 className="f5 fw1 helvetica mv1 tracked">Web Developer</h1>
      </div>
      <Thumbnail />
    </header>
  );
};

export default Header;
