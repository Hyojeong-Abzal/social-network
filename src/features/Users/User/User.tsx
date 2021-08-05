import React from "react";
import { NavLink } from "react-router-dom";
import { UsersType } from "../../../../redux/userReducer";
import userPhoto from "../../../../assets/images/user.png"
import s from "./Users.module.css"



type UserPropsType = {
    user: UsersType
    isFollowing: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const User: React.FC<UserPropsType> = (
    {
        user, isFollowing,
        follow, unFollow, ...props
    }) => {
    return (
        <div>
            <div>
                <NavLink to={'/Profile/' + user.id}>
                    {/* @ts-ignore */}
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={s.userPhoto} />
                    {user.name}
                </NavLink>
            </div>
            <div>
                {user.status}
            </div>
            <div>
                {user.followed
                    ? <button disabled={isFollowing.some(id => id === user.id)}
                        onClick={() => { unFollow(user.id) }}>
                        Unfollow
                    </button>
                    : <button disabled={isFollowing.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>
                        Follow
                    </button>}
            </div>

        </div>
    )
}