import React, { ChangeEvent } from "react";
import s from "./Messages.module.css";
import { ActionsTypes, MessagesType } from "../../../../redux/store";
import { sendMessageAC, updateMessageAC } from "../../../../redux/dialogsPageReducer";



type messagesPropsType = {
  messegeData: MessagesType[];
  dispatch: (action: ActionsTypes) => void;
  newMessage: string;
};

const Messages = (props: messagesPropsType) => {
  let messegedata = props.messegeData.map((message) => (
    <Message key={message.id} message={message} />
  ));

  const sendMessage = () => {
    props.dispatch(sendMessageAC());
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateMessageAC(e.currentTarget.value));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.messages}>{messegedata}</div>
      <div>
        <textarea onChange={onChangeHandler} value={props.newMessage} />
        <button onClick={sendMessage}> sent message</button>
      </div>
    </div>
  );
};

type MessagePropsType = {
  message: MessagesType;
};

function Message(props: MessagePropsType) {
  return (
    <div className={s.wrapper}>
      <div>{props.message.message}</div>
    </div>
  );
}

export default Messages;
