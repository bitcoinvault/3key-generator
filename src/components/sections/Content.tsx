import React, { ReactNode } from 'react';
import { palette, typography } from '../../styles';
import { Grid } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

export class Content extends React.PureComponent<Props> {
  render() {
    return (
      <Grid container justify="center" style={{marginTop: '3em'}}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <div style={styles.container}>
            {this.props.children}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  container: {
    backgroundColor: palette.white,
    boxShadow: '0px 2px 14px 0px rgba(0,0,0,0.1)',
    '-webkit-box-shadow': '0px 2px 14px 0px rgba(0,0,0,0.1)',
    '-moz-box-shadow': '0px 2px 14px 0px rgba(0,0,0,0.1)',
    padding: 40,
  },
}