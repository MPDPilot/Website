import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ListItemIcon } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import data from "../data";

function Features() {
  const classes = useStyles();
  return (
    <Box color="text.secondary" className={classes.mainWrapper}>
      <Container className={classes.mainGrid} maxWidth="md">
        <Typography component="h2" variant="h4" align="center">
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item sm={3} xs={12}>
            <Typography
              component="h3"
              variant="h5"
              align="center"
              color="secondary"
              className={classes.versionNumber}
            >
              V {data.versions[0].number}
            </Typography>
          </Grid>
          <Grid item sm={9} xs={12}>
            <List aria-label="application features">
              {data.versions[0].features.map((feature) => (
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
