import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    marginLeft: '1rem',
    borderLeft: '1px solid lightgray',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      borderRadius: 4
    }
  },
}));

const Editor = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
      <Typography variant="h1">helo</Typography>
    </Grid>
  );
};

export default Editor;
