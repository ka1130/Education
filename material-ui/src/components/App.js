import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "components/Header";
import MainContent from "components/MainContent";
import Sidebar from "components/Sidebar";

const App = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <MainContent />
      </Grid>
    </Grid>
  );
};

export default App;
