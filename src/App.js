import React from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context";

// Добавил комментарии

function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    return (
        <div>
            <AuthContext.Provider value ={{isAuthenticated, setIsAuthenticated}}>
                <Navbar/>
                <AppRouter/>
            </AuthContext.Provider>

        </div>
    )
}

export default App;
