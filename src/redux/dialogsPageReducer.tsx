import React from 'react';
import { ActionsTypes, DialogsPageType, } from './store';

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

const initialState = {

    dialogs: [
        { id: 1, name: 'Tony Stark' },
        { id: 2, name: 'Tony Robbins' },
        { id: 3, name: 'Akzhol Ardakbek' },
        { id: 4, name: 'Abkeev Arlan' },
        { id: 5, name: 'Evgeny Mirzyanov' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'H' },
        { id: 3, message: '1213' },
        { id: 4, message: 'Hello' },
    ],
    newMessageText: ""
}

export const dialogsPageReducer =
    (state: DialogsPageType = initialState, action: ActionsTypes) => {
        switch (action.type) {
            case SEND_MESSEGE:
                const newMessage = {
                    id: new Date().getTime(),
                    message: state.newMessageText,
                };
                state.messages.push(newMessage);
                state.newMessageText = "";
                return state

            case UPDATE_MESSEGE_TEXT:
                state.newMessageText = action.newMessage;
                return state
            default:
                return state

        }

    }