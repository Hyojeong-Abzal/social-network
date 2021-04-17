import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateType, store, StoreType } from "./redux/redux-store";
import { StoreContext } from "./StoreContext";

const renderTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App
        store={store}
      />
      </StoreContext.Provider>
    </React.StrictMode>,

    document.getElementById("root")
  );
};

renderTree();

store.subscribe(renderTree);
