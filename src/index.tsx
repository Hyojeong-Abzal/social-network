import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { AppStateType, store } from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);


