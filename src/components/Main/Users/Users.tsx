import * as axios from "axios";
import React from "react";
import { UsersType } from "../../../redux/UserReducer";
import userPhoto from "../../../assets/images/user.png"
import s from "./Users.module.css"

type UserPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    updateUsers: (users: Array<UsersType>) => void
    changeCurrentPage: (page: number) => void
    setUsersTotalCount: (totalCount: number) => void

}

export class Users extends React.Component<UserPropsType> {


    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.updateUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
        })
    }
    onPageChanged = (p: number) => {
        this.props.changeCurrentPage(p)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.updateUsers(response.data.items)
        })

    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <div>
                    {pages.map((p, index) => {
                        return <span key={index} onClick={() => this.onPageChanged(p)} className={this.props.currentPage === p ? s.selected : ""} > {p}</span>
                    })}
                </div>

                {
                    this.props.users.map(users =>
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
                                    ? <button onClick={() => this.props.onUnfollow(users.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.onFollow(users.id)}>Follow</button>}
                            </div>

                        </div>
                    )
                }
            </div >
        )
    }
}