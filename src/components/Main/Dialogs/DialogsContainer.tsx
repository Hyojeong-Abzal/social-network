import React from "react";
import Dialogs from "./Dialogs";
import { StoreType } from "../../../redux/redux-store";
import { sendMessageAC, updateMessageAC } from "../../../redux/dialogsPageReducer";

type PropsType = {
  store: StoreType
};

export const DialogsContainer = (props: PropsType) => {

  const state = props.store.getState().dialogsPage;
 

  const sendMessage = () => {
    props.store.dispatch(sendMessageAC());
  };
  const onChangeHandler = (newValue: string) => {
    props.store.dispatch(updateMessageAC(newValue));
  };


  return <Dialogs state={state} sendMessage={sendMessage} onChangeHandler={onChangeHandler} />
};
