import React from 'react';
import classes from "./PostItem.module.css";
const PostItem = () => {
    return (
        <div className={classes.post}>
            <div className="post__content">
                <strong>1С</strong>
                <div>
                    1С - самый лучший язык программирования
                </div>
            </div>
            <div className="post_btns">
                <button className="post_btn">Удалить
                </button>
            </div>
        </div>
    );
};

export default PostItem;