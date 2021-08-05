import React from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { User } from "./User/User";
import { UsersType } from "./userReducer";
import s from "./Users.module.css"



type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFollowing: number[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    isFollowingAC: (isFetching: boolean, userId: number) => void

}

export const Users: React.FC<UsersPropsType> = (
    {
        users, pageSize, totalUsersCount, currentPage = 1, isFollowing,
        follow, unFollow, onPageChanged, isFollowingAC, ...props
    }) => {

    return (
        <div>
            <Pagination
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
                currentPage={currentPage}
                portionSize={10}
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