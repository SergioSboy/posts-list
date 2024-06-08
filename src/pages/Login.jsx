import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuthenticated(true);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type={"text"} placeholder="Введите логин"/>
                <MyInput type={"password"} placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;