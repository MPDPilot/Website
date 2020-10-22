import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import theme from "./theme";
import Gallery from "./sections/Gallery";
import Features from "./sections/Features";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Hero />
        <Features />
        <Container>
          Gallery
          <Gallery />
        </Container>
        <Container>Maintainers</Container>
        <Container>Contact</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
