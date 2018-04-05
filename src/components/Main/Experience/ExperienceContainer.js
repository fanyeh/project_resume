import React from 'react';
import PropTypes from 'prop-types';

const ExperienceContainer = props => {
  return (
    <div className="experienceContainer ml3 pl4 pb3">
      <div className="near-black">
        <h1 className="dib ma0 f5 ttc">{props.title}</h1>
        <h1 className="dib ma0 f5 fr">{props.date}</h1>
      </div>
      <p className="bb b--moon-gray pb3 f5 fw3 gray lh-copy">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet, atque laboriosam
        officia assumenda veniam molestiae vitae.
      </p>
    </div>
  );
};

ExperienceContainer.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
};

export default ExperienceContainer;
