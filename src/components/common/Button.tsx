import React from 'react';
import { palette, typography, gradients } from '../../styles';

interface Props {
  label: string;
}

export class Button extends React.PureComponent<Props> {
  render() {
    return (
      <div style={styles.container}>
        <span style={styles.label}>{this.props.label}</span>
      </div>
    );
  }
}

const styles = {
  container: {
    ...gradients.Secondary,
    width: 270,
    padding: '11px 25px 13px 25px',
    textAlign: 'center' as const,
    borderRadius: 32.5,
    cursor: 'pointer'
  },
  label: {
    ...typography.headline5,
    color: palette.white,
  },
}