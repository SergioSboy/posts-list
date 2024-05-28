import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

// Добавил комментарии

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: '1C', body: 'Description'},
        {id: 3, title: 'C++', body: 'Description'},
        {id: 4, title: 'C#', body: 'Description'}
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const sortedPosts = getSortedPosts()

    function getSortedPosts(){
        if (selectedSort)
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        return posts;
    }

    // My comment
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPost = (sort) => {
        setSelectedSort(sort)
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>

            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Поиск...'
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue='Сортировка'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={sortedPosts} title={'Список постов'}/>
                : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
            }

        </div>
    );
}

export default App;
