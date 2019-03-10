import React from "react";
import { AppBar, Button, Grid, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid item xs={1}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton color="inherit">
            <Button variant="contained">Teamwork</Button>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
