import React from 'react';
import { PostsType } from '../../../../redux/store';
import s from './Post.module.css'

type PostPropsType = {
    post: PostsType;
}


function Post(props: PostPropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img
                    src="https://sun9-54.userapi.com/impg/c858532/v858532894/109aab/QgbYlClVvxk.jpg?size=1280x1280&quality=96&sign=0ffeb8dec673187ed8b61505eecf0cf0&type=album" />
            </div>
            <div className={s.text}>
                <h5>Abzal Suan</h5>
                <div className={s.items}>
                    <div className={s.message}>{props.post.message}</div>
                    <div className={s.item}>like:{props.post.like}</div>

                </div>
            </div>
        </div>
    )
}

export default Post;
