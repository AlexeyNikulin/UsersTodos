import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div id="login-form">
                <div className="login-title">АВТОРИЗАЦИЯ</div>
                <fieldset>
                    <form method="get">
                        <input type="text" required placeholder="Логин" />
                        <input type="password" required placeholder="Пароль" /> 
                        <input type="submit" placeholder="ВОЙТИ"/>
                        <span>Нет аккаунта? <Link to="/register">Регистрация</Link></span>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default Login
