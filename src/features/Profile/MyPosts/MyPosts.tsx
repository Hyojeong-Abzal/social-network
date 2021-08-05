import React, { ChangeEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormControls/FormControls";

export type PostsType = {
  id: number
  message: string
  like: number
}
type MyPostsPropsType = {
  posts: PostsType[];
  addPost: (newPostText: string) => void
};

function MyPosts(props: MyPostsPropsType) {
  let postData = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ));



  const onsubmitHandler = (values: FormDataType) => {
    props.addPost(values.newPostText)
  }
  return (
    <div className={s.wrapper}>
      <AddPostsFormContainer onSubmit={onsubmitHandler} />
      {postData}
    </div>
  );
}

export default MyPosts;
type FormDataType = {
  newPostText: string
}



const maxLength30 = maxLengthCreator(30);
export const AddPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.addPost}>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter new post text"
          validate={[required, maxLength30]} />
        <button>add post</button>
      </div>
    </form>

  )
}

const AddPostsFormContainer = reduxForm<FormDataType>({
  form: "AddPostsForm"
})(AddPostsForm)