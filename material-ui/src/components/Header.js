import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  InputBase,
  Toolbar
} from "@material-ui/core";
import {
  AccountCircle,
  Menu as MenuIcon,
  Search as SearchIcon
} from "@material-ui/icons";
import { OverrideMaterialUICss } from "override-material-ui-css";

const Header = () => {
  return (
    <OverrideMaterialUICss>
      <AppBar position="static" className="app-header">
        <Toolbar>
          <Grid item xs={1}>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Teamwork</Button>
          </Grid>
          <Grid item xs={4}>
            <div className="searchbar">
              <SearchIcon />
              <InputBase placeholder="Search…" className="searchbar--input" />
            </div>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} className="account">
            <Button color="inherit">Lorem Ipsum</Button>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </OverrideMaterialUICss>
  );
};

export default Header;
