import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import Login from "./components/Login/Login";

type PropsType = {
};

function App(props: PropsType) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/Profile/:userId?"
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
        <Route path="/Login" component={Login} />


      </div>
    </div>
  );
}

export default App;
