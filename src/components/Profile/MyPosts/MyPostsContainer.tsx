import React, { ChangeEvent } from "react";
import { AddPostAC, UpdatePostAC } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../redux/redux-store";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapDispatchPropsType = {
  addPost: () => void
  updatePostText: (newValue: string) => void

};


let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: () => { dispatch(AddPostAC()); },
    updatePostText: (newValue: string) => {
      dispatch(UpdatePostAC(newValue));
    }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);