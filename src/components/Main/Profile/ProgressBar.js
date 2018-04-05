import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  render() {
    const setting = {
      '--barWidth': this.props.width,
      '--percentage': this.props.percentage,
    };
    return (
      <div className="mb4">
        <div className="f5 w-30 dib gray">{this.props.name}</div>
        <div className="progressBar relative dib bg-light-gray ml2" style={setting} />
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
