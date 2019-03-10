import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { OverrideMaterialUICss } from "override-material-ui-css";

const MainContent = () => {
  return (
    <OverrideMaterialUICss>
      <ExpansionPanel className="list-panel">
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className="list-panel__heading">
            Expansion Panel 1
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </OverrideMaterialUICss>
  );
};

export default MainContent;
