import React from "react";
import Dialogs from "./Dialogs";
import { AppStateType, StoreType } from "../../../redux/redux-store";
import { sendMessageAC, updateMessageAC } from "../../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapDispatchPropsType = {
  onChangeHandler: (newValue: string) => void
  sendMessage: () => void
};


let mapStateToProps = (state: AppStateType) => {
  return {
    state: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    onChangeHandler: (newValue: string) => { dispatch(updateMessageAC(newValue)); },
    sendMessage: () => { dispatch(sendMessageAC()); }

  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



