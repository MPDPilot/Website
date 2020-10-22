import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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
