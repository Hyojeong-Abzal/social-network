import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Messages from "./Messages/Messages";
import {
  ActionsTypes, DialogsPageType,
} from "../../../redux/store";

type PropsType = {
  dialogsPage: DialogsPageType;
  dispatch: (action: ActionsTypes) => void;
};

const Dialogs = (props: PropsType) => {


  let dialogElement = props.dialogsPage.dialogs.map((d) => (
    <Dialog id={d.id} name={d.name} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElement}</div>
      <Messages
        messegeData={props.dialogsPage.messages}
        dispatch={props.dispatch}
        newMessage={props.dialogsPage.newMessageText}
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
