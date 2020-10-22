import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import theme from "./theme";
import Gallery from "./sections/Gallery";
import Features from "./sections/Features";
import Contact from "./sections/Contact";
import PrivacyPolicy from "./sections/PrivacyPolicy";

const Main = () => (
  <React.Fragment>
    <main>
      <Hero />
      <Features />
      <Gallery />
      <Contact />
    </main>
    <Footer isHome={true} />
  </React.Fragment>
);

const Privacy = () => (
  <React.Fragment>
    <main>
      <Hero small />
      <PrivacyPolicy />
    </main>
    <Footer isHome={false} />
  </React.Fragment>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/">
        <Route exact path="/" component={Main} />
        <Route path="/privacy-policy" component={Privacy} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
