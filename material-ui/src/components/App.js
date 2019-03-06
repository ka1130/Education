import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";

const styles = {
  app: {
    border: "2px solid green"
  }
};

const App = props => {
  return (
    <div className={props.classes.app}>
      <Button variant="contained" color="primary">
        click
      </Button>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
    </div>
  );
};

export default withStyles(styles)(App);
