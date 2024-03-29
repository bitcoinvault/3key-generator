import React from 'react';
import './multilineInput.scss';

interface Props {
  value?: string;
}

export class MultilineInput extends React.PureComponent<Props> {
  render() {
    return <textarea data-testId="public-key" rows={8} readOnly value={this.props.value} />;
  }
}
