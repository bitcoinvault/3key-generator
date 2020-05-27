import React from 'react';
import { palette, typography } from '../../styles';

interface Props {
}

export class MultilineInput extends React.PureComponent<Props> {
  render() {
    return (
      <textarea style={styles.textArea} readOnly rows={10} cols={36}>
      </textarea>
    );
  }
}

const styles = {
  textArea: {
    resize: 'none' as const,
    borderRadius: 20,
    borderColor: palette.border,
    padding: 16
  },
}