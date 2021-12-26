import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// redux
import { Provider } from "react-redux";
import store from "./store";

// chakra ui
// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
