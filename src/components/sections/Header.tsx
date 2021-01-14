import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { images } from '../../assets';
import './header.scss';

class Header extends React.PureComponent<WithTranslation, any> {
  render() {
    const { t } = this.props;
    return (
      <div className="header">
        <img alt={t('header:logoAlt')} src={images.logo} className="logo" />
        <h1 className="label">{t('header:title')}</h1>
      </div>
    );
  }
}

export default withTranslation()(Header);
