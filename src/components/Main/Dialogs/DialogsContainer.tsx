import React from "react";
import Dialogs from "./Dialogs";
import { StoreType } from "../../../redux/redux-store";
import { sendMessageAC, updateMessageAC } from "../../../redux/dialogsPageReducer";
import { StoreContext } from "../../../StoreContext";

type PropsType = {
  // store: StoreType
};

export const DialogsContainer = (props: PropsType) => {
  return <StoreContext.Consumer>
    {store => {
      const state = store.getState().dialogsPage;
      const sendMessage = () => {
        store.dispatch(sendMessageAC());
      };
      const onChangeHandler = (newValue: string) => {
        store.dispatch(updateMessageAC(newValue));
      };


      return <Dialogs state={state} sendMessage={sendMessage} onChangeHandler={onChangeHandler} />
    }}
  </StoreContext.Consumer>





};
