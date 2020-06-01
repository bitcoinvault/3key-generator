import React from 'react';
import { palette, typography } from '../../styles';

interface Props {
  label: string;
}

export class Label extends React.PureComponent<Props> {
  render() {
    return (
      <div style={styles.label}>{this.props.label}</div>
    );
  }
}

const styles = {
  label: {
    ...typography.headline5,
    color: palette.textGrey,
    fontWeight: 300,
    marginBottom: '1.2em',
    marginTop: '1.4em'
  },
}