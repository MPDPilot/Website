import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(88,168,255,1)",
    },
    secondary: {
      main: "#FB7752"
    },
    text: {
      secondary: "#FFF",
    },
    background: {
      dark: "rgb(34,34,44)",
    },
  },
});

export default theme;
