import React from 'react';
import './button.scss';

interface Props {
  label: string;
  onClick?: any;
  testId?: string;
}

export class Button extends React.PureComponent<Props> {
  render() {
    return (
      <div data-testId={this.props.testId} className="button" onClick={this.props.onClick}>
        <h4 className="label">{this.props.label}</h4>
      </div>
    );
  }
}
