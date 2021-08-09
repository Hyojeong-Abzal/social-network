import { securityAPI } from './../../Api/api'
import React from 'react'
import { Dispatch } from 'redux'
import { stopSubmit } from 'redux-form'
import { usersAPI } from '../../Api/api'
import { AppThunkType } from '../../App/redux-store'

export type AuthMeActionTypes = SetLoginActionType | SetCaptchaURLActionType

export type SetLoginActionType = ReturnType<typeof setLogin>
export type SetCaptchaURLActionType = ReturnType<typeof setCaptchaURL>

export const setLogin = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captcha?: string
) => {
  return {
    type: SET_LOGIN,
    data: { id, email, login, captcha },
    isAuth: isAuth,
  } as const
}
export const setCaptchaURL = (url: string) => {
  return {
    type: SET_CAPTCHA_URL,
    url,
  } as const
}

const SET_LOGIN = 'SET_LOGIN'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

export type AuthReducerType = {
  resultCode: number | null
  messages: [] | null
  data: {
    id: number | null
    login: string | null
    email: string | null
  }
  isAuth: boolean
  captchaURL: string | null
}

const initialState: AuthReducerType = {
  resultCode: 0,
  messages: [],
  data: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
  captchaURL: null,
}

export const authReducer = (
  state: AuthReducerType = initialState,
  action: AuthMeActionTypes
): AuthReducerType => {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        data: action.data,
        isAuth: action.isAuth,
      }
    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captchaURL: action.url,
      }

    default:
      return state
  }
}

export const authMe = (): AppThunkType => async dispatch => {
  try {
    const res = await usersAPI.authUser()
    if (res.resultCode === 0) {
      let { id, email, login } = res.data
      dispatch(setLogin(id, email, login, true))
    }
  } catch (e) {}
}

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
  ): AppThunkType =>
  async dispatch => {
    const res = await usersAPI.login(email, password, rememberMe, captcha)
    debugger
    if (res.data.resultCode === 0) {
      usersAPI.authUser().then(res => {
        if (res.resultCode === 0) {
          let { id, email, login } = res.data
          dispatch(setLogin(id, email, login, true))
        }
      })
    } else {
      debugger
      if (res.data.resultCode === 10) {
        debugger
        dispatch(captchaTC())
      }
      res.data.messages[0]
        ? //@ts-ignore
          dispatch(stopSubmit('login', { _error: res.data.messages[0] }))
        : //@ts-ignore
          dispatch(stopSubmit('login', { _error: 'Some Error' }))
    }
  }

export const logout = (): AppThunkType => async dispatch => {
  const res = await usersAPI.logout()
  if (res.data.resultCode === 0) {
    dispatch(setLogin(null, null, null, false))
  }
}

export const captchaTC = (): AppThunkType => async dispatch => {
  const res = await securityAPI.captcha()
  if (res.data) {
    dispatch(setCaptchaURL(res.data))
  }
}
