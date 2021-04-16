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


export const profilePageReducer = (state: ProfilePageType, action: ActionsTypes) => {
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