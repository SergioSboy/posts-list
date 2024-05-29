import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Постов нет</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove = {remove} post={post} number={index + 1} key={post.id}/>)
            }
        </div>
    );
};

export default PostList;