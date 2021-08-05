import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from "../features/Header/HeaderContainer";
import Login from "../features/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./appReducer";
import { AppStateType } from "./redux-store";
import Navbar from "../features/Navbar/Navbar";
import ProfileContainer from "../features/Profile/ProfileContainer";
import DialogsContainer from "../features/Dialogs/DialogsContainer";
import { withSuspense } from "../components/HOC/withSuspense";
// import UsersContainer from "../features/Users/UsersContainer";
const UsersContainer = React.lazy(() => import('../features/Users/UsersContainer'));


type PropsType = {
  initialized: boolean
  initializeApp: () => void
};

class App extends React.Component<PropsType>  {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    // if (!this.props.initialized) {
    //   return <div>
    //     <InitialScreen />
    //   </div>
    // }
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
            render={withSuspense(UsersContainer)}
          />
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