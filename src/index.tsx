import "./index.css";
import { RootStateType, store } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderTree = (_state: RootStateType) => {
  debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={_state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,

    document.getElementById("root")
  );
};

renderTree(store.getState());

store.subscribe(renderTree);
