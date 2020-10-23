import React from "react";
import s1 from "../assets/screenshots/s1.png";
import s2 from "../assets/screenshots/s2.png";
import s3 from "../assets/screenshots/s3.png";
import s4 from "../assets/screenshots/s4.png";
import s5 from "../assets/screenshots/s5.png";
import s6 from "../assets/screenshots/s6.png";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  galleryBox: {
    overflowX: "scroll",
  },
  galleryItem: {
    flexShrink: 0,
    width: "40%",
    minWidth: "250px",
    maxWidth: "300px",
    height: "auto",
    paddingRight: theme.spacing(1),
    alignSelf: "flex-start"
  },
}));

export default Gallery;
