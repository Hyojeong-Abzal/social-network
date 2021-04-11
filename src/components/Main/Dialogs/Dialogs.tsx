import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Messages from "./Messages/Messages";
import {
  ActionsTypes,
  DialogsDateType,
  MessagePageType,
} from "../../../redux/state";

type PropsType = {
  dialogsData: DialogsDateType[];
  messagePage: MessagePageType;
  dispatch: (action: ActionsTypes) => void;
};

const Dialogs = (props: PropsType) => {
  debugger;

  let dialogElement = props.dialogsData.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElement}</div>
      <Messages
        messegeData={props.messagePage.messagesData}
        dispatch={props.dispatch}
        newMessage={props.messagePage.newMessage}
      />
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
