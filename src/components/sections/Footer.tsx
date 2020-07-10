import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguagePicker } from 'components/pages/keyGenerator/LanguagePicker';

class Footer extends React.PureComponent<WithTranslation, any> {
  render() {
    const { t } = this.props;
    return (
      <div style={styles.container}>
        <h5>{t('footer:title')}</h5>
        <LanguagePicker />
      </div>
    );
  }
}

export default withTranslation()(Footer);

const styles = {
  container: {
    padding: '34px',
    textAlign: 'center' as const
  },
}