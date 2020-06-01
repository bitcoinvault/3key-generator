import React from 'react';
import { palette } from '../../styles';

interface Props {
  value?: string;
}

export class MultilineInput extends React.PureComponent<Props> {
  render() {
    return (
      <textarea style={styles.textArea} readOnly rows={10} value={this.props.value} />
    );
  }
}

const styles = {
  textArea: {
    resize: 'none' as const,
    borderRadius: 20,
    borderColor: palette.border,
    padding: 16,
    width: '90%'
  },
}