import React from "react";
import mpdPilotLogoTransparent from "./assets/mpdPilotLogoTransparent.png";

import CssBaseline from "@material-ui/core/CssBaseline";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
} from "@material-ui/core";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import theme from "./theme";

const cards = [1, 2, 3];

const tileData = [
  {
    img: mpdPilotLogoTransparent,
    title: "Image",
    author: "author",
  },
  {
    //  [etc...]
  },
];

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Hero />
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <GridList className={classes.gridList} cols={2.5}>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Container>
        <Container>
          Features
          <Grid item xs={12} sm={9}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem>
                <ListItemText primary="Inbox" />
              </ListItem>
            </List>
          </Grid>
        </Container>
        <Container>Gallery</Container>
        <Container>Maintainers</Container>
        <Container>Contact</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "rgb(13,113,254)",
    background:
      "linear-gradient(0deg, rgba(13,113,254,1) 0%, rgba(88,168,255,1) 100%)",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default App;
