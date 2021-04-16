import { combineReducers, createStore } from 'redux'
import { messagePageReducer } from './messagePageReducer'
import { profilePageReducer } from './profilePageReducer'

// rootReducer type
let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagePage: messagePageReducer,
})

//store type
export let store = createStore(rootReducer)

export type StoreType = typeof store

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

// типизацию прописали, осталось как у Димыча поменять State
// потому что в будущем все будет меняться. Сделай все как у него и не парься и не отвлекай других
// поидее это все фигня, потом когда дойдешь до конца, все станет очень легко
// твоя цель максимально и оптимально быстро дойти до конца, но если будешь делать свое, то отвечаю будет намного сложнее
