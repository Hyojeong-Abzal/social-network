import React from 'react';
import { AddPostActionType } from './profilePageReducer';

// for messege
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsActionsTypes =
    | AddPostActionType
    | SendMessageActionType


export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessage: string) => {
    return {
        type: 'SEND-MESSEGE',
        newMessage
    } as const
}



const SEND_MESSEGE = "SEND-MESSEGE"

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
}

export const dialogsPageReducer =
    (state: DialogsPageType = initialState, action: DialogsActionsTypes) => {

        switch (action.type) {
            case SEND_MESSEGE:
                return {
                    ...state,
                    messages: [...state.messages, {
                        id: new Date().getTime(),
                        message: action.newMessage,
                    }]
                }


            default:
                return state

        }

    }