import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "redux/store";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#A99E7E",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "#A99E7E",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderColor: "#A99E7E",
        color: "#A99E7E",
      },
    },
  },
});
console.log(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
