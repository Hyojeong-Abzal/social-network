import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { Route } from "react-router-dom";
import { DialogsContainer } from "./components/Main/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Main/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type PropsType = {
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
            <ProfileContainer />
          )}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <DialogsContainer />
          )}
        />
        <Route
          path="/Users"
          render={() => (
            <UsersContainer />
          )}
        />
        <Route path="/Settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
