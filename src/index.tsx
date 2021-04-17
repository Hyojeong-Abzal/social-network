import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateType, store, StoreType } from "./redux/redux-store";
import { Provider, StoreContext } from "./StoreContext";
import { BrowserRouter } from "react-router-dom";

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
