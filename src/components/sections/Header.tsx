import React from 'react';
import { palette, typography, gradients } from '../../styles';
import { images } from '../../assets';

export class Header extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <img alt="logo" src={images.logo} style={styles.logo} />
        <span style={styles.label}>3 Keys Generator</span>
      </div>
    );
  }
}

const styles = {
  container: {
    ...gradients.Primary,
    padding: '1rem 0.5rem 1rem 0.5rem',
    display: 'flex',
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
  label: {
    ...typography.headline1,
    color: palette.white,
  },
  logo: {
    justifySelf: 'flex-start' as const,
    width: 170,
    height: 100,
  }
}