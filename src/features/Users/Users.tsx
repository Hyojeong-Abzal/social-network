import React from "react";
import { UsersType } from "../../../redux/userReducer";
import { Paginator } from "../../common/Paginator/Paginator";
import { User } from "./User/User";
import s from "./Users.module.css"



type UsersPropsType = {
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

export const Users: React.FC<UsersPropsType> = (
    {
        users, pageSize, totalUsersCount, currentPage, isFollowing,
        follow, unFollow, onPageChanged, isFollowingAC, ...props
    }) => {

    return (
        <div>
            <Paginator
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged} />
            <div>
                {
                    users.map(u => <User
                        key={u.id}
                        user={u}
                        isFollowing={isFollowing}
                        follow={follow}
                        unFollow={unFollow}
                    />)
                }
            </div>

        </div >
    )
}