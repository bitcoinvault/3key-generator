import React from 'react';
import './styledText.scss';

interface Props {
  label: string;
}

export class StyledText extends React.PureComponent<Props> {
  render() {
    const { label } = this.props;
    return (
      <h4 className="styled-text">{label}</h4>
    );
  }
}
