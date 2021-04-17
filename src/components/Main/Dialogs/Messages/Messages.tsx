import React, { ChangeEvent } from "react";
import s from "./Messages.module.css";
import { ActionsTypes, MessagesType } from "../../../../redux/store";
import { sendMessageAC, updateMessageAC } from "../../../../redux/dialogsPageReducer";



type messagesPropsType = {
  message: string
};

export const Messages = (props: messagesPropsType) => {
  return (
    <div>
      {props.message}
    </div>
  );
};


