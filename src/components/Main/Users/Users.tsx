import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/user.png"
import { UsersType } from "../../../redux/userReducer";
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

export const Users = (props: UserPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} onClick={() => props.onPageChanged(p, props.pageSize)} className={props.currentPage === p ? s.selected : ""} > {p}</span>
                })}
            </div>


            {
                props.users.map(users =>
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
                                ? <button disabled={props.isFollowing.some(id => id === users.id)}
                                    onClick={() => { props.unFollow(users.id) }}>
                                    Unfollow
                                    </button>
                                : <button disabled={props.isFollowing.some(id => id === users.id)} onClick={() => {
                                    props.follow(users.id)
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