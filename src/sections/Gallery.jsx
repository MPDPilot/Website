import React from "react";
import s1 from "../assets/screenshots/s1.png";
import s2 from "../assets/screenshots/s2.png";
import s3 from "../assets/screenshots/s3.png";
import s4 from "../assets/screenshots/s4.png";
import s5 from "../assets/screenshots/s5.png";
import s6 from "../assets/screenshots/s6.png";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const galleryImages = [
  {
    img: s4,
    title: "Main app screen dark mode",
  },
  {
    img: s6,
    title: "Main app screen light mode",
  },
  {
    img: s2,
    title: "Queue app screen",
  },
  {
    img: s3,
    title: "Library app screen",
  },
  {
    img: s5,
    title: "App settings",
  },
  {
    img: s1,
    title: "List of outputs",
  },
];

function Gallery() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Gallery
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        className={classes.galleryBox}
      >
        {galleryImages.map((tile) => (
          <img
            src={tile.img}
            alt={tile.title}
            className={classes.galleryItem}
          />
        ))}
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  galleryWrapper: {
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  galleryBox: {
    overflowX: "scroll",
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
  galleryItem: {
    flexShrink: 0,
    width: "40%",
    minWidth: "250px",
    maxWidth: "300px",
    height: "auto",
    paddingRight: theme.spacing(1),
  },
}));

export default Gallery;
