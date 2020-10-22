import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

function Footer({ isHome = true }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center">
          Copyright © MPD Pilot team {new Date().getFullYear()}
        </Typography>
        <Link to={isHome ? "/privacy-policy" : "/"}>
          <Typography
            variant="body2"
            align="center"
            className={classes.copyright}
          >
            {isHome ? "Privacy Policy" : "Home"}
          </Typography>
        </Link>
      </Container>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default Footer;
