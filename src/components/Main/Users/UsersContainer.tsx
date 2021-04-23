import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/redux-store";
import { FOLLOWAC, UNFOLLOWAC, UPDATE_USERSAC, UsersType } from "../../../redux/UserReducer";
import { Users } from "./Users";



type MapDispatchPropsType = {
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    updateUsers: (users: Array<UsersType>) => void

  };
  
  


  let mapStateToProps = (state: AppStateType) => {
    return {
      state: state.userPage
    }
  }
  let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
      onFollow: (id: number) => { dispatch(FOLLOWAC(id)); },
      onUnfollow: (id: number) => { dispatch(UNFOLLOWAC(id)); },
      updateUsers: ( users:Array<UsersType>) => { dispatch(UPDATE_USERSAC(users)); },
  
    }
  }
  
  export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
  
