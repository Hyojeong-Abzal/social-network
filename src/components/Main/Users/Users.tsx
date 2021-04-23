import React, { ChangeEvent } from "react";
import { UsersPageType, UsersType } from "../../../redux/UserReducer";

type UserPropsType = {
    state: UsersPageType
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    updateUsers: (users: Array<UsersType>) => void
}



export const Users = (props: UserPropsType) => {
    return (
        <div>
            {
                props.state.users.map(users =>
                    <div key={users.id}>
                        <div>
                            <img src={users.userPhoto} />
                            {users.fullName}
                        </div>
                        <div>
                            {users.status}
                            {users.location.city}
                            {users.location.country}

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