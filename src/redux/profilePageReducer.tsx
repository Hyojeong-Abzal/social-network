import React from 'react';
import { ActionsTypes, PostDatatype, ProfilePageType } from './state';

// for profile

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdatePostActionType = ReturnType<typeof UpdatePostAC>

export const AddPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const UpdatePostAC = (newText: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: newText,
    } as const
}
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"

const initialPageReducerState = {
    profileInfoData: [
        {
            id: 1,
            name: 'Abzal Suan',
            age: 21,
            isMarried: ' with Trisha Navarro',
            born: 'Almaty, Kazakhstan',
            live: 'Moscow, Russia',
            status:
                ' from KZ 🍏 Healthy Life-style ⚡ Volunteer 🎯 student in Moscow',
        },
    ],
    postData: [
        { id: 1, message: 'Love, awareness and full invetment !', like: 35 },
        {
            id: 2,
            message:
                "What you are is God's gift to you, what you'll become is your gift to God.",
            like: 5535,
        },
        { id: 3, message: 'true love is never giving up!', like: 55 },
    ],
    newPostText: '',
}

export const profilePageReducer = (state: ProfilePageType = initialPageReducerState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostDatatype = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}