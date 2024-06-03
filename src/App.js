import React from "react";
import './styles/App.css'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About.";
import Navbar from "./components/UI/navbar/Navbar";
import Error from "./pages/Error";

// Добавил комментарии

function App() {

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/*" element={<Navigate to="/error" replace />} />
            </Routes>

        </div>
    )
}

export default App;
