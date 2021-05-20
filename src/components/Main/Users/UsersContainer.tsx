import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../../Api/api';

import { AppStateType } from '../../../redux/redux-store';
import {
  changeCurrentPage,
  onFollow,
  isFollowingAC,
  onUnFollow,
  setTotalUsersCount,
  toggleIsFetching,
  updateUsers,
  UsersType,
} from '../../../redux/UserReducer';
import { Preloader } from '../../common/preloader/Preloader';
import { Users } from './Users';




type MapDispatchPropsType = {
  onFollow: (id: number) => void
  onUnFollow: (id: number) => void
  updateUsers: (users: Array<UsersType>) => void
  changeCurrentPage: (page: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void

};

type UserPropsType = {
  users: UsersType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  isFollowing: number[]
  onFollow: (id: number) => void
  onUnFollow: (id: number) => void
  updateUsers: (users: Array<UsersType>) => void
  changeCurrentPage: (page: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  isFollowingAC: (isFetching: boolean, userId: number) => void


}


export class UsersContainerClass extends React.Component<UserPropsType> {


  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).
      then(data => {
        this.props.updateUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }
  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.changeCurrentPage(p)
    usersAPI.getUsers(p, this.props.pageSize)
      .then(data => {
        this.props.updateUsers(data.items)
        this.props.toggleIsFetching(false)
      })

  }
  render() {


    return <>
      {this.props.isFetching ? <Preloader /> : ""}
      <Users {...this.props}
        onPageChanged={this.onPageChanged}
      />
    </>
  }
}









let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    isFollowing: state.userPage.isFollowing

  }
}


export const UsersContainer = connect(mapStateToProps, {
  onFollow, onUnFollow, updateUsers, changeCurrentPage, setTotalUsersCount, toggleIsFetching, isFollowingAC
})(UsersContainerClass);

