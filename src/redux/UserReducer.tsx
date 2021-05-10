import React from 'react';
import { act } from 'react-dom/test-utils';

type ActionType = followActionType | unFollowActionType | updateUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType

export type followActionType = ReturnType<typeof unFollow>
export type unFollowActionType = ReturnType<typeof follow>
export type updateUsersActionType = ReturnType<typeof updateUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>




export const unFollow = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}
export const follow = (id: number) => {
    return {
        type: FOLLOW,
        id
    } as const
}
export const updateUsers = (users: Array<UsersType>) => {
    return {
        type: UPDATE_USERS,
        users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const UPDATE_USERS = "UPDATE_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"




export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: { small: null, large: null }
    status: null
    followed: boolean
}
export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1



}

export const userPageReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
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
            return { ...state, users: action.users }
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.page }
        case "SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsersCount: action.totalCount }
        default:
            return state
    }
}


