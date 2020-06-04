import React from 'react';
import './label.scss';

interface Props {
  label: string;
}

export class Label extends React.PureComponent<Props> {
  render() {
    return (
      <h4 className="label-item">{this.props.label}</h4>
    );
  }
}
