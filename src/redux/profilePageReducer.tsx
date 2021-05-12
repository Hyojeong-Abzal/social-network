import React from 'react';
import { PostsType } from './store';

// for profile

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type UpdatePostActionType = ReturnType<typeof UpdatePostAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>


export type profileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type ProfilePageType = {
    profile: profileType | null
    posts: PostsType[]
    newPostText: string
}
type ActionsTypes =
    | AddPostActionType
    | UpdatePostActionType
    | setUserProfileActionType


export const AddPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const UpdatePostAC = (newText: string) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: newText,
    } as const
}
export const setUserProfileAC = (profile: profileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"


const initialState = {
    profile: null,
    posts: [
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

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: new Date().getTime(),
                    message: state.newPostText,
                    like: 0
                }, ...state.posts],
                newPostText: ""
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}