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


type LocationType = {
    country: string
    city: string
}
export type UsersType = {
    id: number
    userPhoto: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    users: UsersType[]
}

const initialState = {
    users: [
        {
            id: 1, userPhoto: "data:image/png;base64,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",
            followed: true, fullName: "Abzal K", status: "Love, awerness and full investment", location: { country: "Kazakhstan", city: "Almaty" }
        },
        {
            id: 2, userPhoto: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fff%2Fa0%2F9a%2Fffa09aec412db3f54deadf1b3781de2a.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F312859505363637482%2F&tbnid=SnTWNNl-712rYM&vet=12ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQ..i&docid=VgL7Pqn5v0e6gM&w=792&h=792&q=user%20avatar%20png&safe=strict&ved=2ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQdata:image/png;base64,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",
            followed: false, fullName: "Alex P", status: "Love, awerness and full investment", location: { country: "Russia", city: "Moscow" }
        },
        {
            id: 3, userPhoto: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fff%2Fa0%2F9a%2Fffa09aec412db3f54deadf1b3781de2a.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F312859505363637482%2F&tbnid=SnTWNNl-712rYM&vet=12ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQ..i&docid=VgL7Pqn5v0e6gM&w=792&h=792&q=user%20avatar%20png&safe=strict&ved=2ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQ",
            followed: false, fullName: "Bob K", status: "Love, awerness and full investment", location: { country: "USA", city: "Bruclin" }
        },
        {
            id: 4, userPhoto: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fff%2Fa0%2F9a%2Fffa09aec412db3f54deadf1b3781de2a.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F312859505363637482%2F&tbnid=SnTWNNl-712rYM&vet=12ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQ..i&docid=VgL7Pqn5v0e6gM&w=792&h=792&q=user%20avatar%20png&safe=strict&ved=2ahUKEwiAx6GniJTwAhXCxSoKHYKLCr4QMygAegUIARC6AQ",
            followed: true, fullName: "Kim M", status: "Love, awerness and full investment", location: { country: "Korea", city: "Seoul" }
        }
    ]


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
            return { ...state, users: [...state.users, action.users] }
        default:
            return state
    }
}


