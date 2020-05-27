import React from 'react';
import { palette, typography } from '../../styles';

interface Props {
  label: string;
}

export class FlatButton extends React.PureComponent<Props> {
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
    width: 270,
    padding: '11px 25px 13px 25px',
    textAlign: 'center' as const,
  },
  label: {
    ...typography.headline5,
    color: palette.textSecondary,
    cursor: 'pointer'
  },
}