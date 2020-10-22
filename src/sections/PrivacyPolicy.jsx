import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function PrivacyPolicy() {
  const classes = useStyles();
  return (
    <Box color="text.secondary" className={classes.mainWrapper}>
      <Container className={classes.mainGrid} maxWidth="md" id="contact">
        <Typography component="h2" variant="h4" align="center" gutterBottom>
          Privacy Policy
        </Typography>
        <List aria-label="privacy policy points">
          <ListItem>
            <ListItemText
              primary="1. Application does not collect any user's personal data or
              information."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Application stores MPD server credentials such as host name, port
              number and password locally, on the user's device."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Application does
          not collect any usage or statistical information."
            />
          </ListItem>
        </List>
        <Typography component="P" align="center">
          If you have any other questions or suggestions about our privacy
          policy, feel free to e-mail us:{" "}
          <Link
            href="mailto:support@mpdpilot.app"
            variant="p"
            color="primary"
            align="center"
          >
            support@mpdpilot.app
          </Link>
        </Typography>
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
}));

export default PrivacyPolicy;
