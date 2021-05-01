import * as axios from "axios";
import React, { ChangeEvent } from "react";
import { UsersPageType, UsersType } from "../../../redux/UserReducer";

type UserPropsType = {
    state: UsersPageType
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    updateUsers: (users: Array<UsersType>) => void
}


//"https://social-network.samuraijs.com/api/1.0/users"
export const Users = (props: UserPropsType) => {
    let getUsers = () => {
        debugger
        if (props.state.users.length === 0) {
            axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.updateUsers(response.data.items)
            })
        }
    }
    return (

        <div>
            <button onClick={getUsers}> Get Users</button>
            {
                props.state.users.map(users =>
                    <div key={users.id}>
                        <div>
                            <img src={users.userPhoto} />

                            {users.name}
                        </div>
                        <div>
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
        </div>
    )
}


