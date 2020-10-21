import {
  Box,
  Grid,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1">
            MPDPilot / Manage your MPD flying high!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" component="p">
            Available on Appstore
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h3">V1.0.0</Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box flexDirection="row">
        Features
        <Box>V1.0.0</Box>
        <Box>A/B/C</Box>
      </Box>
      <Box>Gallery</Box>
      <Box>
        Maintainers
        <Box>Noemi</Box>
        <Box>Piotr</Box>
      </Box>
      <Box>Contact</Box>
      <Box>Privacy policy</Box>
    </div>
  );
}

export default App;
