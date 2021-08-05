import React, { ChangeEvent } from "react";
import s from "./Messages.module.css";



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


