import React from 'react';
import { usersAPI } from '../Api/api';
import { AppThunkType } from './redux-store';
import { setLogin } from '../features/Login/authMeReducer';


export type AppActionType =
    setInitializedActionType


export type setInitializedActionType = ReturnType<typeof setInitialized>






export const setInitialized = (
    initialized: boolean
) => {
    return {
        type: SET_INITIALIZED,
        initialized
    } as const
}

const SET_INITIALIZED = "SET_INITIALIZED"


export type AppReducerType = {
    initialized: boolean
}

const initialState: AppReducerType = {
    initialized: false
}

export const appReducer = (state: AppReducerType = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.initialized
            }

        default:
            return state
    }
}



export const initializeApp = (): AppThunkType => async dispatch => {
    const res = await usersAPI.authUser()
    if (res.resultCode === 0) {
        let { id, email, login } = res.data;
        dispatch(setLogin(id, email, login, true))
        dispatch(setInitialized(true))
    }
}


