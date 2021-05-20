import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../Api/api";
import userPhoto from "../../../assets/images/user.png"
import { UsersType } from "../../../redux/UserReducer";
import s from "./Users.module.css"


type PropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFollowing: number[]
    onFollow: (id: number) => void
    onUnFollow: (id: number) => void
    onPageChanged: (p: number) => void
    isFollowingAC: (isFetching: boolean, userId: number) => void

}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selected : ""} > {p}</span>
                })}
            </div>


            {
                props.users.map(users =>
                    <div key={users.id}>
                        <div>
                            <NavLink to={'/Profile/ ' + users.id}>
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
                                ? <button disabled={props.isFollowing.some(id => id === users.id)} onClick={() => {
                                    props.isFollowingAC(true, users.id);
                                    usersAPI.unFollow(users.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.onUnFollow(users.id)
                                                props.isFollowingAC(false, users.id);

                                            }
                                        })
                                }}>
                                    Unfollow
                                    </button>
                                : <button disabled={props.isFollowing.some(id => id === users.id)} onClick={() => {
                                    props.isFollowingAC(true, users.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "5c3d7df5-b9a4-40af-905c-224c75d0849c"
                                        }
                                    }).then(response => {

                                        if (response.data.resultCode === 0) {

                                            props.onFollow(users.id)
                                            props.isFollowingAC(false, users.id);

                                        }
                                    })
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