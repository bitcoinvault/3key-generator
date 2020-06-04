import React from 'react';
import { en } from '../../locale/en';

export class Footer extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h5>{en.footer.title}</h5>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '34px',
    textAlign: 'center' as const
  },
}