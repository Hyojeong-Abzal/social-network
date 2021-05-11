import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/redux-store";
import { follow, setCurrentPage, setTotalUsersCount, unFollow, updateUsers, UsersType } from "../../../redux/UserReducer";
//
import * as axios from "axios";
import { Users } from "./Users";




type MapDispatchPropsType = {
  onFollow: (id: number) => void
  onUnfollow: (id: number) => void
  updateUsers: (users: Array<UsersType>) => void
  changeCurrentPage: (page: number) => void
  setUsersTotalCount: (totalCount: number) => void

};

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


export class UsersContainerClass extends React.Component<UserPropsType> {


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


    return <Users
      users={this.props.users}
      pageSize={this.props.pageSize}
      totalUsersCount={this.props.totalUsersCount}
      currentPage={this.props.currentPage}
      onFollow={this.props.onFollow}
      onUnfollow={this.props.onUnfollow}
      onPageChanged={this.onPageChanged}
    />
  }
}









let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage

  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    onFollow: (id: number) => { dispatch(follow(id)); },
    onUnfollow: (id: number) => { dispatch(unFollow(id)); },
    updateUsers: (users: Array<UsersType>) => { dispatch(updateUsers(users)); },
    changeCurrentPage: (page: number) => { dispatch(setCurrentPage(page)) },
    setUsersTotalCount: (totalCount: number) => { dispatch(setTotalUsersCount(totalCount)) }

  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass);

