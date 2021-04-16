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

const initialMessegePageState = {
    newMessage: '',
    messagesData: [
        {
            id: 1,
            avatar:
                'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
            name: 'Tony Stark',
            message: 'Hey! Did you already applay for job in my company?',
            time: '10:00',
        },
        {
            id: 2,
            avatar:
                'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
            name: 'Tony Stark',
            message: 'I just created a new language of programming',
            time: '10:05',
        },
        {
            id: 3,
            avatar:
                'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
            name: 'Tony Stark',
            message: 'Could you look at it?',
            time: '10:20',
        },
    ],
}
export const messagePageReducer = 
(state: MessagePageType = initialMessegePageState, action: ActionsTypes): MessagePageType => {
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