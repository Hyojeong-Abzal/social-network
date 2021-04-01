import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Main/Dialogs/Dialogs";
import News from "./components/Main/News/News";
import Music from "./components/Main/Music/Music";
import Settings from "./components/Main/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import { RootStateType } from "./redux/state";
import Profile from "./components/Profile/Profile";

type PropsType = {
  state: RootStateType;
  addPost: () => void;
  sendMessage: () => void;
  updatePostText: (newText: string) => void;
  updateMessageText: (newMessage: string) => void;
};

function App(props: PropsType) {
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
                addPost={props.addPost}
                updatePostText={props.updatePostText}
              />
            )}
          />
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                messagePage={props.state.messagePage}
                sendMessage={props.sendMessage}
                updateMessageText={props.updateMessageText}
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
