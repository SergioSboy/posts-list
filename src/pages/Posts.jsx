import React, {useEffect, useState} from "react";
import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/page";
import Pagination from "../components/UI/pagination/Pagination";

// Добавил комментарии

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(10);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })


    useEffect(() => {
        fetchPosts()
    }, [page]);


    // My comment
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {postError &&
                <h1>Произошла ошибка {postError}</h1>
            }
            {isPostLoading
                ? <div style={{display: "flex", justifyContent: 'center', marginTop: '20px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />


        </div>
    );
}

export default Posts;
