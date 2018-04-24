import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  render() {
    const { percentage, name } = this.props;
    const setting = {
      '--barWidth': '70%',
      '--percentage': percentage,
    };
    return (
      <div className="mb4">
        <div className="f5-ns f6 w-30 dib gray">{name}</div>
        <div className="progressBar relative dib bg-light-gray " style={setting} />
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  width: '230px',
  percentage: 0.9,
};

ProgressBar.propTypes = {
  width: PropTypes.string,
  percentage: PropTypes.number,
};

export default ProgressBar;
