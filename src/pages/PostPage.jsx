import React from 'react';
import {useParams} from "react-router-dom";
const PostPage = () => {
    const params = useParams();
    return (
        <div>
            <h1>Вы на странице поста c ID = {params.id}</h1>
        </div>
    );
};

export default PostPage;