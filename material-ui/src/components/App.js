import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = {
  app: {
    border: "2px solid green"
  }
};

const App = props => {
  return (
    <div className={props.classes.app}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Hello there
          </Typography>
        </Toolbar>
      </AppBar>
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
