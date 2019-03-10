import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "components/Header";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={16} justify="center" alignItems="center">
        <Grid container item xs={12} spacing={16}>
          <Header />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
