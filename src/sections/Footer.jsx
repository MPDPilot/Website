import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="h6" align="center" gutterBottom id="privacyPolicy">
          Privacy policy
        </Typography>
        <Typography variant="p">
          Application does not collect any user's personal data or information.
          Application stores MPD server credentials such as host name, port
          number and password locally, on the user's device. Application does
          not collect any usage or statistical information. If you have any
          other questions or suggestions about our privacy policy, feel free to
          e-mail us: support@mpdpilot.app
        </Typography>
        <Typography
          variant="body2"
          align="center"
          className={classes.copyright}
        >
          Copyright © MPD Pilot team {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  copyright: {
    marginTop: theme.spacing(6),
  },
}));

export default Footer;
