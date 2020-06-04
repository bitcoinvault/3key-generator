import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import './content.scss';

interface Props {
  children: ReactNode;
}

export class Content extends React.PureComponent<Props> {
  render() {
    return (
      <Grid container justify="center" style={{ marginTop: '3em' }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <div className="content">
            {this.props.children}
          </div>
        </Grid>
      </Grid>
    );
  }
}
