import React from "react";
import userPhoto from "../../../assets/images/user.png"
import { UsersType } from "../../../redux/UserReducer";
import s from "./Users.module.css"


type PropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    onPageChanged: (p: number) => void

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
                            <img src={userPhoto} className={s.userPhoto} />
                            {users.name}
                        </div>
                        <div>
                            {users.status}
                        </div>
                        <div>
                            {users.followed
                                ? <button onClick={() => props.onUnfollow(users.id)}>Unfollow</button>
                                : <button onClick={() => props.onFollow(users.id)}>Follow</button>}
                        </div>

                    </div>
                )
            }
        </div >
    )
}