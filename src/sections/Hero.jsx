import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import mpdPilotLogoTransparent from "../assets/mpdPilotLogoTransparent.png";
import appStoreBadge from "../assets/appStoreBadge.svg";

function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            className={classes.heroRow}
          >
            <img
              src={mpdPilotLogoTransparent}
              alt="MPD Pilot Logo"
              className={classes.icon}
            />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textSecondary"
            >
              MPD Pilot
            </Typography>
          </Box>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.heroRow}
          >
            Manage your MPD server flying high!
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <Link href="#">
                <img src={appStoreBadge} alt="App Store download button" />
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    width: "100px",
    height: "100px",
  },
  heroContent: {
    backgroundColor: "rgb(13,113,254)",
    background:
      "linear-gradient(0deg, rgba(13,113,254,1) 0%, rgba(88,168,255,1) 100%)",
    padding: theme.spacing(10, 0, 10),
    height: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center'
  },
  heroRow: {
    marginBottom: theme.spacing(6),
  },
}));

export default Hero;
