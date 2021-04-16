import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/SettingsNetwork/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionsTypes, RootStateType } from "./redux/state";
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
                dialogsData={props.state.dialogsPage.dialogsData}
                messagePage={props.state.messagePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/News" component={News} />
          <Route
            path="/Music"
            component={() => <Music musicsPage={props.state.musicsPage} />}
          />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
