import React from 'react';
import classNames from 'classnames';

const SectionHeader = props => {
  return <h1 className={classNames('f3 f-primary ttc ma0', props.className)}>{props.name}</h1>;
};

export default SectionHeader;
