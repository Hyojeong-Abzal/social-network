import React from 'react';
import { Dispatch } from 'redux';
import { profileAPI } from '../Api/api';
import { PostsType } from './store';

// for profile

export type AddPostActionType = ReturnType<typeof AddPostAC>
export type setUserProfileActionType = ReturnType<typeof setUserProfileAC>


export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
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
    profile: ProfileType | null
    posts: PostsType[]
    newPostText: string
    status: string
}
type ActionsTypes =
    | AddPostActionType
    | setUserProfileActionType
    | ReturnType<typeof setStatusAC>



export const AddPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export const setUserProfileAC = (profile: ProfileType | null) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}


const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"




const initialState: ProfilePageType = {
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
    status: "",
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{
                    id: new Date().getTime(),
                    message: action.newPostText,
                    like: 0
                }, ...state.posts],
            };
     
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const getProfile = (userId: number | string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfileAC(response))
            })
    }
}

export const setStatusTC = (userId: number | string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatusAC(res))
        })
}



export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}