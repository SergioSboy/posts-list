import React from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";

// Добавил комментарии

function App() {

    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    )
}

export default App;
