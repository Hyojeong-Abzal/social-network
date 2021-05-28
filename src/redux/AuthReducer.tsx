import React from 'react';
import { usersAPI } from '../Api/api';
import { Dispatch } from 'redux';


type ActionType =
    setLoginActionType


export type setLoginActionType = ReturnType<typeof setLogin>






export const setLogin = (id: number, email: string, login: string) => {
    return {
        type: SET_LOGIN,
        data: { id, email, login }
    } as const
}

const SET_LOGIN = "SET_LOGIN"


export type AythReducerType = {
    resultCode: number | null
    messages: [] | null
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
    isAuth: boolean
}

const initialState: AythReducerType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

export const authReducer = (state: AythReducerType = initialState, action: ActionType): AythReducerType => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                data: action.data,
                isAuth: true
            }

        default:
            return state
    }
}



export const authMe = () => (dispatch: Dispatch) => {
    usersAPI.getLogin()
    .then(data => {
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setLogin(id, email, login))
        }
    })
}
