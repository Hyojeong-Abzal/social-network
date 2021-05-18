import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { AppStateType } from '../../../redux/redux-store';
import {
  changeCurrentPage,
  onFollow,
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
  onFollow: (id: number) => void
  onUnFollow: (id: number) => void
  updateUsers: (users: Array<UsersType>) => void
  changeCurrentPage: (page: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void


}


export class UsersContainerClass extends React.Component<UserPropsType> {


  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
  }).then(response => {
      this.props.updateUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      this.props.toggleIsFetching(false)
    })
  }
  onPageChanged = (p: number) => {
    this.props.toggleIsFetching(true)
    this.props.changeCurrentPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
      withCredentials: true
  }).then(response => {
      this.props.updateUsers(response.data.items)
      this.props.toggleIsFetching(false)
    })

  }
  render() {


    return <>
      {this.props.isFetching ? <Preloader /> : ""}
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onFollow={this.props.onFollow}
        onUnFollow={this.props.onUnFollow}
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
    isFetching: state.userPage.isFetching

  }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//   return {
//     onFollow: (id: number) => { dispatch(onFollow(id)); },
//     onUnFollow: (id: number) => { dispatch(onUnFollow(id)); },
//     updateUsers: (users: Array<UsersType>) => { dispatch(updateUsers(users)); },
//     changeCurrentPage: (page: number) => { dispatch(changeCurrentPage(page)) },
//     setTotalUsersCount: (totalCount: number) => { dispatch(setTotalUsersCount(totalCount)) },
//     toggleIsFetching: (isFetching: boolean) => { dispatch(toggleIsFetching(isFetching)) }

//   }
// }

export const UsersContainer = connect(mapStateToProps, {
  onFollow, onUnFollow, updateUsers, changeCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainerClass);

