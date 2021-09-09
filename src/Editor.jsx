import React from "react";
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";

const Editor = () => {
  return (
    <Grid item
    style={{
      flex: 1,
      marginLeft: '1rem',
      borderLeft: '1px solid lightgray',
      height: '100%',
      overflowY: 'scroll'
    }}>
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
