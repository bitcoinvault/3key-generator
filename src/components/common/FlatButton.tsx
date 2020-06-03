import React from 'react';
import './flatButton.scss';

interface Props {
  label: string;
}

export class FlatButton extends React.PureComponent<Props> {
  render() {
    const { label } = this.props;
    return (
      <div className="flat-button">
        <h4 className="label">{label}</h4>
      </div>
    );
  }
}
