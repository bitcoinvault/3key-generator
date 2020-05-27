import React from 'react';
import { palette, typography, gradients } from '../../styles';

export class Header extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <span style={styles.label}>3 Keys Generator</span>
      </div>
    );
  }
}

const styles = {
  container: {
    ...gradients.Primary,
    width: '100%',
    padding: '35px 10px 35px 10px',
    textAlign: 'center' as const,
  },
  label: {
    ...typography.headline1,
    color: palette.white,
  },
}