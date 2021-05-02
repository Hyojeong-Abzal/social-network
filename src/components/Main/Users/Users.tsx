import * as axios from "axios";
import React, { ChangeEvent } from "react";
import { UsersPageType, UsersType } from "../../../redux/UserReducer";
import userPhoto from "../../../assets/images/user.png"

type UserPropsType = {
    state: UsersPageType
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    updateUsers: (users: Array<UsersType>) => void
}

export class Users extends React.Component<UserPropsType> {

    componentDidMount() {
        alert("I know I am inside the DOM")
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.updateUsers(response.data.items)
        })
    }
    render() {
        return (

            <div>
                {
                    this.props.state.users.map(users =>
                        <div key={users.id}>
                            <div>
                                <img src={userPhoto} />

                                {users.name}
                            </div>
                            <div>
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
            </div>
        )
    }
}