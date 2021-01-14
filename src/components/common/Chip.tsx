import React from 'react';
import './chip.scss';

interface Props {
  label: string;
}

export class Chip extends React.PureComponent<Props> {
  render() {
    return <h4 className="chip">{this.props.label}</h4>;
  }
}
