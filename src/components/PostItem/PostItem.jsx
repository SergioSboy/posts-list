import React from 'react';
import classes from "./PostItem.module.css";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className={classes.post}>
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton className="post_btn" onClick={() => props.remove(props.post)}>Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;