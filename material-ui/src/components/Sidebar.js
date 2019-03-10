import React from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { MoveToInbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons";
import { OverrideMaterialUICss } from "override-material-ui-css";

const Sidebar = () => {
  return (
    <OverrideMaterialUICss>
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        className="sidebar"
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </OverrideMaterialUICss>
  );
};

export default Sidebar;
