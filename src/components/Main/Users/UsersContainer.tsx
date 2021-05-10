import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/redux-store";
import { follow, setCurrentPage, setTotalUsersCount, unFollow, updateUsers, UsersType } from "../../../redux/UserReducer";
import { Users } from "./Users";



type MapDispatchPropsType = {
  onFollow: (id: number) => void
  onUnfollow: (id: number) => void
  updateUsers: (users: Array<UsersType>) => void
  changeCurrentPage: (page: number) => void
  setUsersTotalCount: (totalCount: number) => void

};




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
    setUsersTotalCount: ( totalCount: number) => {  dispatch(setTotalUsersCount(totalCount)) }

  }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

