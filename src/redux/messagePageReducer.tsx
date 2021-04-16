import React from 'react';
import { ActionsTypes, MessagePageType } from './state';

// for messege

export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSEGE',
    } as const
}

export const updateMessageAC = (newMessage: string) => {
    return {
        type: 'UPDATE-MESSEGE-TEXT',
        newMessage: newMessage,
    } as const
}

const SEND_MESSEGE = "SEND-MESSEGE"
const UPDATE_MESSEGE_TEXT = "UPDATE-MESSEGE-TEXT"


export const messagePageReducer = (state: MessagePageType, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSEGE:
            const newMessage = {
                id: new Date().getTime(),
                avatar: 'https://sun9-54.userapi.com/impg/c858532/v858532894/109aab/QgbYlClVvxk.jpg?size=1280x1280&quality=96&sign=0ffeb8dec673187ed8b61505eecf0cf0&type=album',
                name: 'Abzal Suan',
                message: state.newMessage,
                time: '10:25'
            };
            state.messagesData.push(newMessage);
            state.newMessage = "";
            return state

        case UPDATE_MESSEGE_TEXT:
            state.newMessage = action.newMessage;
            return state
        default:
            return state

    }

}