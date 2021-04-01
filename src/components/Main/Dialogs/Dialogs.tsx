import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Messages from "./Messages/Messages"
import {DialogsDateType, MessagePageType} from "../../../redux/state";


type PropsType = {
    dialogsData: DialogsDateType[]
    messagePage: MessagePageType
    sendMessage: () => void
    updateMessageText: (newMessage: string) => void
}


const Dialogs = (props: PropsType) => {
    debugger


    let dialogElement = props.dialogsData
        .map(d => <Dialog id={d.id} name={d.name}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}


            </div>
            <Messages messegeData={props.messagePage.messagesData}
                      sendMessage={props.sendMessage}
                      newMessage={props.messagePage.newMessage}
                      updateMessageText={props.updateMessageText}/>


        </div>
    )
}
type DialogType = {
    id: number
    name: string
}
const Dialog = (props: DialogType) => {
    return (
        <div className={s.dialog + " " + s.active}><NavLink to={"/Dialogs/" + props.id}>{props.name} </NavLink></div>
    )
}


export default Dialogs;