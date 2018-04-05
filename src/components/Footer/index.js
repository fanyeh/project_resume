import React from 'react';
import FooterIcon from './FooterIcon';

const icons = [
  {
    style: 'fa-github',
    link: 'https://github.com',
  },
  {
    style: 'fa-linkedin-in',
    link: ' https://www.linkedin.com',
  },
  {
    style: 'fa-codepen',
    link: 'https://codepen.io/',
  },
];
const Footer = () => {
  return (
    <div className="bg-primary flex justify-around pa5">
      {icons.map(icon => <FooterIcon icon={icon.style} link={icon.link} key={icon.style} />)}
    </div>
  );
};

export default Footer;
