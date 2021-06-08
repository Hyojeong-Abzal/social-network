import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { DialogsPageType } from "../../../redux/store";
import { Messages } from "./Messages/Messages";

type PropsType = {
  state: DialogsPageType
  sendMessage: () => void
  onChangeHandler: (newValue: string) => void
};

const Dialogs = (props: PropsType) => {


  let dialogElement = props.state.dialogs.map((d) =>
    <Dialog id={d.id} name={d.name} />
  );
  let messagesElement = props.state.messages.map((m) =>
    <Messages key={m.id} message={m.message} />
  )

  const sendMessage = () => { props.sendMessage() }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.currentTarget.value
    props.onChangeHandler(newValue)
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElement}</div>
      <div className={s.grids}>
        <div className={s.messages}>
          {messagesElement}
        </div>
        <div className={s.textarea}>
          <textarea onChange={onChangeHandler} value={props.state.newMessageText} />
          <button onClick={sendMessage}> sent message</button>
        </div>
      </div>
    </div>
  );
};



type DialogType = {
  id: number;
  name: string;
};
const Dialog = (props: DialogType) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name} </NavLink>
    </div>
  );
};

export default Dialogs;
