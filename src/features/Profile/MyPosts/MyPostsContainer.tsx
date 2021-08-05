import React, { ChangeEvent } from "react";
import MyPosts from "./MyPosts";
import { AppStateType } from "../../../App/redux-store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddPostAC } from "../profilePageReducer";

type MapDispatchPropsType = {
  addPost: (newPostText: string) => void

};


let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addPost: (newPostText: string) => { dispatch(AddPostAC(newPostText)); },
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);