import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, FormControlLabel, Checkbox, FormControl } from '@material-ui/core';
import { Chip } from '../../common/Chip';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const words = ['needless',
    'wistful',
    'plastic',
    'multiply',
    'table',
    'premium',
    'decision',
    'rightful',
    'arm',
    'cautious',
    'things',
    'popcorn'];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <img src="/favicon.png" width="50" />
          <Typography variant="h6" color="inherit" noWrap>
            3 Keys Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" style={{ marginBottom: 20 }}>
            Generate ECDSA key
          </Typography>
          <React.Fragment>
            <React.Fragment>
              <React.Fragment>
                <Grid container spacing={3} lg={12}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Public key
                </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Public key QR Code
                </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={3} lg={12}>
                  <Grid item xs={12} sm={6} md={6}>
                    <FormControl fullWidth>
                      <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} style={{textAlign: 'center'}}>
                    <img height={160} src="data:image/png;base64,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" />
                  </Grid>
                </Grid>


                <Grid container spacing={3} lg={12}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Phrase
                </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Private key QR Code
                </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={3} xs={12} style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={6} md={6}>
                  {words.map(word => 
                  <Chip label={word.toUpperCase()} />
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={6} style={{textAlign: 'center'}}>
                    <img height={160} src="data:image/png;base64,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" />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Generate key
      </Button>
              </React.Fragment>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  )
}