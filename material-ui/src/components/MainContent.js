import React from "react";

import { OverrideMaterialUICss } from "override-material-ui-css";

import ItemsList from "components/ItemsList";

const MainContent = () => {
  return (
    <OverrideMaterialUICss>
      <ItemsList />
    </OverrideMaterialUICss>
  );
};

export default MainContent;
