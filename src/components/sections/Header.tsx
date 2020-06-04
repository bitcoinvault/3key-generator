import React from 'react';
import { images } from '../../assets';
import { en } from '../../locale/en';
import './header.scss';

export class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <img alt={en.header.logoAlt} src={images.logo} className="logo" />
        <h1 className="label">{en.header.title}</h1>
      </div>
    );
  }
}
