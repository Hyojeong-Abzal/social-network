import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { StoreType } from "./redux/redux-store";
import { DialogsContainer } from "./components/Main/Dialogs/DialogsContainer";

type PropsType = {
  // store: StoreType;
};

function App(props: PropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/Profile"
          render={() => (
            <Profile
            // store={props.store}
            />
          )}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <DialogsContainer
            // store={props.store}
            />
          )}
        />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
