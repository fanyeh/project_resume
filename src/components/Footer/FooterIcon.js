import React from 'react';
import classNames from 'classnames';
const iconStyle = ['fab', 'bg-secondary', 'pa3', 'f2-ns', 'f5', 'br-100', 'white'];

const FooterIcon = props => {
  return (
    <div className="tc w-30 cp">
      <a className="" href={props.link}>
        <i className={classNames(iconStyle, props.icon)} />
        <br />
        {/* <p className="white f5 dib mt4">{props.link}</p> */}
      </a>
    </div>
  );
};

export default FooterIcon;
