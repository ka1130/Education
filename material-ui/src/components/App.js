import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "components/Header";
import MainContent from "components/MainContent";
import Sidebar from "components/Sidebar";

const App = () => {
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  console.log("ok");
  return (
    <>
      {/* <CssBaseline /> */}
      <Grid container alignItems="center">
        <Grid container item xs={12} spacing={0}>
          <Header />
        </Grid>
        <Grid container item xs={12} spacing={0}>
          {/* <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={9}>
            <MainContent />
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
