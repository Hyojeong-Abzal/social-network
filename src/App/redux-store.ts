import { AppActionType, appReducer } from './appReducer'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddlewere, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {
  ProfilePageActionTypes,
  profilePageReducer,
} from '../features/Profile/profilePageReducer'
import {
  DialogsActionTypes,
  dialogsPageReducer,
} from '../features/Dialogs/dialogsPageReducer'
import {
  userPageReducer,
  UserPeducerActionType,
} from '../features/Users/userReducer'
import { AuthMeActionTypes, authReducer } from '../features/Login/authMeReducer'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  userPage: userPageReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

//store type
// export let store = createStore(rootReducer, applyMiddleware(thunkMiddlewere))

export type StoreType = typeof store

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>
export type GetAppStateType = () => AppStateType;

export type AppActionsType =
  | AppActionType
  | AuthMeActionTypes
  | DialogsActionTypes
  | ProfilePageActionTypes
  | UserPeducerActionType

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AppActionsType
>
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
