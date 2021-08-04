import { AppActionType, appReducer } from './appReducer'
import { DialogsActionsTypes, dialogsPageReducer } from './dialogsPageReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {
  ProfilePageActionsTypes,
  profilePageReducer,
} from './profilePageReducer'
import thunkMiddlewere, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { AuthMeActionTypes, authReducer } from './authMeReducer'
import { userPageReducer, UserPeducerActionType } from './userReducer'

let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  userPage: userPageReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

//store type
export let store = createStore(rootReducer, applyMiddleware(thunkMiddlewere))

export type StoreType = typeof store

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type AppActionsType =
  | AppActionType
  | AuthMeActionTypes
  | DialogsActionsTypes
  | ProfilePageActionsTypes
  | UserPeducerActionType

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AppActionsType
>

/* @ts-ignore */
window.store = store
