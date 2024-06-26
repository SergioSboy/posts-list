import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchedPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })

    const [fetchingComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchedPostById(params.id)
        fetchingComments(params.id)
    }, []);

    return (
        <div>
            <h1>Вы на странице поста c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map((comm =>
                        <div key = {comm.id} style={{marginTop: '20px'}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>))}
                </div>
            }
        </div>
    );
};

export default PostPage;