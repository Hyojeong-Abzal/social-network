import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { Route, withRouter } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Main/Dialogs/DialogsContainer";
import UsersContainer from "./components/Main/Users/UsersContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { AppStateType } from "./redux/redux-store";
import { Preloader } from "./components/common/preloader/Preloader";
type PropsType = {
  initialized: boolean
  initializeApp: () => void
};

class App extends React.Component<PropsType>  {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
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

}
const mstp = (state: AppStateType) => ({
  initialized: state.app.initialized
})
export default compose<React.ComponentType>(
  connect(mstp, { initializeApp }),
  withRouter,
)(App)