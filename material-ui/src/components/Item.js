import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Item = props => {
  const { item, index } = props;
  return (
    <ExpansionPanel className="list-panel">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="list-panel__heading">
          {`${item.title} ${index}`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{item.content}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Item;
