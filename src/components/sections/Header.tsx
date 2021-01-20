import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { images } from '../../assets';
import './header.scss';

class Header extends React.PureComponent<WithTranslation, any> {
  render() {
    const { t } = this.props;
    return (
      <div className="header">
        <img data-testId="bitcoint-vault-logo" alt={t('header:logoAlt')} src={images.logo} className="logo" />
        <h1 data-testId="header" className="label">
          {t('header:title')}
        </h1>
      </div>
    );
  }
}

export default withTranslation()(Header);
