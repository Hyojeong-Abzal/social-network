import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/user.png"
import { UsersType } from "../../../redux/userReducer";
import { Paginator } from "../../common/Paginator/Paginator";
import s from "./Users.module.css"



type UserPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFollowing: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (p: number, pageSize: number) => void
    isFollowingAC: (isFetching: boolean, userId: number) => void

}

export const Users: React.FC<UserPropsType> = (
    {
        users, pageSize, totalUsersCount, currentPage, isFollowing,
        follow, unFollow, onPageChanged, isFollowingAC
    }) => {

    return (
        <div>
            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged} />
            {
                users.map(users =>
                    <div key={users.id}>
                        <div>
                            <NavLink to={'/Profile/' + users.id}>
                                {/* @ts-ignore */}
                                <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                    className={s.userPhoto} />
                                {users.name}
                            </NavLink>
                        </div>
                        <div>
                            {users.status}
                        </div>
                        <div>
                            {users.followed
                                ? <button disabled={isFollowing.some(id => id === users.id)}
                                    onClick={() => { unFollow(users.id) }}>
                                    Unfollow
                                </button>
                                : <button disabled={isFollowing.some(id => id === users.id)} onClick={() => {
                                   follow(users.id)
                                }}>
                                    Follow
                                </button>}
                        </div>

                    </div>
                )
            }
        </div >
    )
}