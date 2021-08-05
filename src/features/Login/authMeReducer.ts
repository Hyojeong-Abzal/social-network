import React from 'react';
import { usersAPI } from '../Api/api';
import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form';
import { AppThunkType } from '../App/redux-store';


export type AuthMeActionTypes =
    setLoginActionType


export type setLoginActionType = ReturnType<typeof setLogin>






export const setLogin = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => {
    return {
        type: SET_LOGIN,
        data: { id, email, login },
        isAuth: isAuth
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

export const authReducer = (state: AythReducerType = initialState, action: AuthMeActionTypes): AythReducerType => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth
            }

        default:
            return state
    }
}



export const authMe = (): AppThunkType => async dispatch => {

    try {
        const res = await usersAPI.authUser()
        if (res.resultCode === 0) {
            let { id, email, login } = res.data;
            dispatch(setLogin(id, email, login, true))
        }
    } catch (e) {

    }

}


export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async dispatch => {
    const res = await usersAPI.login(email, password, rememberMe)

    if (res.data.resultCode === 0) {
        usersAPI.authUser()
            .then(res => {
                if (res.resultCode === 0) {
                    let { id, email, login } = res.data;
                    dispatch(setLogin(id, email, login, true))
                }
            })
    } else {

        res.data.messages[0]
            //@ts-ignore
            ? dispatch(stopSubmit('login', { _error: res.data.messages[0] }))
            //@ts-ignore
            : dispatch(stopSubmit('login', { _error: 'Some Error' }))

    }

}


export const logout = (): AppThunkType => async dispatch => {
    const res = await usersAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setLogin(null, null, null, false))
    }
}
