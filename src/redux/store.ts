import {
  dialogsPageReducer,
  SendMessageActionType,
  UpdateMessageActionType,
} from './dialogsPageReducer'
import {
  AddPostActionType,
  profilePageReducer,
  UpdatePostActionType,
} from './profilePageReducer'

let renderTree = (_state: RootStateType) => {
  console.log('State changed!')
}
export type DialogsType = {
  id: number
  name: string
}
export type MessagesType = {
  id: number
  message: string
}
export type PostsType = {
  id: number
  message: string
  like: number
}

export type ProfilePageType = {
  posts: PostsType[]
  newPostText: string
}
export type DialogsPageType = {
  dialogs: DialogsType[]
  messages: MessagesType[]
  newMessageText: string
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type storeType = {
  _state: RootStateType
  subscribe: (observer: (_state: RootStateType) => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
  | AddPostActionType
  | UpdatePostActionType
  | SendMessageActionType
  | UpdateMessageActionType

export const store: storeType = {
  _state: {
    profilePage: {
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
      newPostText: 'fefsdfsef',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Tony Stark' },
        { id: 2, name: 'Tony Robbins' },
        { id: 3, name: 'Akzhol Ardakbek' },
        { id: 4, name: 'Abkeev Arlan' },
        { id: 5, name: 'Evgeny Mirzyanov' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'H' },
        { id: 3, message: '1213' },
        { id: 4, message: 'Hello' },
      ],
      newMessageText: '',
    },
  },
  subscribe(observer: (_state: RootStateType) => void) {
    renderTree = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    )
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    )
    renderTree(this._state)
  },
}
