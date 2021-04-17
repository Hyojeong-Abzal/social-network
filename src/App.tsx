import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionsTypes, } from "./redux/store";
import Profile from "./components/Profile/Profile";
import { AppStateType } from "./redux/redux-store";

type PropsType = {
  state: AppStateType;
  dispatch: (action: ActionsTypes) => void
};

function App(props: PropsType) {
  debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}

              />
            )}
          />
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
