import React from 'react';

type ActionType = FOLLOWActionType | UNFOLLOWActionType | UPDATEUSERSActionType

export type FOLLOWActionType = ReturnType<typeof UNFOLLOWAC>
export type UNFOLLOWActionType = ReturnType<typeof FOLLOWAC>
export type UPDATEUSERSActionType = ReturnType<typeof UPDATE_USERSAC>


export const UNFOLLOWAC = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}
export const FOLLOWAC = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
}
export const UPDATE_USERSAC = (users: Array<UsersType>) => {
    return {
        type: UPDATE_USERS,
        users
    } as const
}
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const UPDATE_USERS = "UPDATE_USERS"



export type UsersType = {
    id: number
    userPhoto: string
    followed: boolean
    name: string
    status: string
}
export type UsersPageType = {
    users: UsersType[]
}

const initialState = {
    users: []
}

export const userPageReducer = (state: UsersPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u

                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case 'UPDATE_USERS':
            return { ...state, users: [action.users] }
        default:
            return state
    }
}


