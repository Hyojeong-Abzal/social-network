import React, { ChangeEvent } from "react";
import s from "./Messages.module.css";
import { ActionsTypes, MessagesDataType } from "../../../../redux/state";
import { sendMessageAC, updateMessageAC } from "../../../../redux/messagePageReducer";



type messagesPropsType = {
  messegeData: MessagesDataType[];
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
  message: MessagesDataType;
};

function Message(props: MessagePropsType) {
  return (
    <div className={s.wrapper}>
      <img className={s.avatar} src={props.message.avatar} alt="avatar" />
      <div className={s.angle}></div>
      <div className={s.item}>
        <div className={s.name}>{props.message.name}</div>
        <div className={s.text}>{props.message.message}</div>
        <div className={s.time}>{props.message.time}</div>
      </div>
    </div>
  );
}

export default Messages;
