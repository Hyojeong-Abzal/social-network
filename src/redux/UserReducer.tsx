import React from 'react';
import { Dispatch } from 'redux';
import { usersAPI } from '../Api/api';

type ActionType =
    followActionType
    | unFollowActionType
    | updateUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | isFollowingActionType

export type followActionType = ReturnType<typeof onUnFollow>
export type unFollowActionType = ReturnType<typeof onFollow>
export type updateUsersActionType = ReturnType<typeof updateUsers>
export type setCurrentPageActionType = ReturnType<typeof changeCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type isFollowingActionType = ReturnType<typeof isFollowingAC>





export const onUnFollow = (id: number) => {
    return {
        type: UNFOLLOW,
        id
    } as const
}
export const onFollow = (id: number) => {
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
export const changeCurrentPage = (page: number) => {
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

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const isFollowingAC = (isFetching: boolean, userId: number) => {
    return {
        type: IS_FOLLOWING,
        isFetching,
        userId
    } as const
}
const UNFOLLOW = "UNFOLLOW"
const FOLLOW = "FOLLOW"
const UPDATE_USERS = "UPDATE_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const IS_FOLLOWING = "IS_FOLLOWING"






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
    isFetching: boolean
    isFollowing: number[]
}

const initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []



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
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching }
        case 'IS_FOLLOWING':
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        default:
            return state
    }
}


export const getUsersThunk = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).
            then(data => {
                dispatch(updateUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            })

    }
}

export const onPageChanged = (p: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(changeCurrentPage(p))
        usersAPI.getUsers(p, pageSize)
            .then(data => {
                dispatch(updateUsers(data.items))
                dispatch(toggleIsFetching(false))
            })

    }
}