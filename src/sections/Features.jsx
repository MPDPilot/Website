import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";

const features = [
  "Control your server playback, manage volume and shuffle and repeat flags",
  "Switch on and off your MPD outputs",
  "Add, move and remove items from the current queue",
  "Browse files library and enqueue songs, folders or stored playlists",
  "Password-protected connections support",
  "Intuitive UI supporting both light and dark mode",
];

function Features() {
  const classes = useStyles();
  return (
    <Box color="text.secondary" className={classes.mainWrapper}>
      <Container className={classes.mainGrid} maxWidth="md">
        <Typography component="h2" variant="h4" align="center">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Typography
              component="p"
              variant="h6"
              className={classes.versionNumber}
              align="center"
            >
              MPD Pilot is a simple MPD client for iOS.
            </Typography>
          </Grid>
          <Grid item sm={8} xs={12}>
            <List aria-label="application features">
              {features.map((feature) => (
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundColor: theme.palette.background.dark,
  },
  mainGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  versionNumber: {
    paddingTop: theme.spacing(2),
  },
}));

export default Features;
