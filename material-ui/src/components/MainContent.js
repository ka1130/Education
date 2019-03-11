import React from "react";
import { Typography } from "@material-ui/core";
import { OverrideMaterialUICss } from "override-material-ui-css";

import ItemsList from "components/ItemsList";

const MainContent = () => {
  return (
    <OverrideMaterialUICss>
      <div style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          Heading
        </Typography>
        <ItemsList className="list-panel" />
      </div>
    </OverrideMaterialUICss>
  );
};

export default MainContent;
