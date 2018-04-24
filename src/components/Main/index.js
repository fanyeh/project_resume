import React from 'react';
import Profile from './Profile';
import Experience from './Experience';
const Main = () => {
  return (
    <div className="flex flex-row-ns flex-column">
      <Profile />
      <Experience />
    </div>
  );
};

export default Main;
