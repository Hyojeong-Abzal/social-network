import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  addPost,
  RootStateType,
  sendMessage,
  updateMessageText,
  updatePostText,
} from "./redux/state";

const renderTree = (state: RootStateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        sendMessage={sendMessage}
        updatePostText={updatePostText}
        updateMessageText={updateMessageText}
      />
    </React.StrictMode>,

    document.getElementById("root")
  );
};

renderTree(state);

subscribe(renderTree);

reportWebVitals();
