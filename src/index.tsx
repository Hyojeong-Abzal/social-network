import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateType, store } from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const renderTree = (state: AppStateType) => {

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
};

renderTree(store.getState());

store.subscribe(
  () => {
    let state = store.getState();
    renderTree(state)
  }
);
