import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateType, store } from "./redux/redux-store";

const renderTree = (state: AppStateType) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,

    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderTree(state)
});
