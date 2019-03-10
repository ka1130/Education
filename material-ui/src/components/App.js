import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "components/Header";
import MainContent from "components/MainContent";
import Sidebar from "components/Sidebar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={16} justify="center" alignItems="center">
        <Grid container item xs={12} spacing={16}>
          <Header />
        </Grid>
        <Grid container item xs={12} spacing={16}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <MainContent />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
