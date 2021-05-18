import React from 'react';

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
        email: string | null
        login: string | null
    }
    isAuth: boolean | null
}

const initialState: AythReducerType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null
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


