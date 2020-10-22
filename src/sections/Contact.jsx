import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link, ListItemIcon } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import data from "../data";

function Contact() {
  const classes = useStyles();
  return (
    <Box color="text.secondary" className={classes.mainWrapper}>
      <Container className={classes.mainGrid} maxWidth="md" id="contact">
        <Typography component="h2" variant="h4" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography component="P" variant="h6" align="center">
          Did you spot any issue? <br /> Do you think of any nice feature you
          would like to see in the app? Let us know!
        </Typography>
        <Link
          href="mailto:support@mpdpilot.app"
          variant="h6"
          color="primary"
          align="center"
          display="block"
        >
          support@mpdpilot.app
        </Link>
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

export default Contact;
