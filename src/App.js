import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import theme from "./theme";
import Gallery from "./sections/Gallery";
import Features from "./sections/Features";
import Contact from "./sections/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
