import React from 'react';
import {Link} from 'react-router-dom';

import './Register.css';

const Register = () => {
    return (
        <>
          <div id="login-form">
            <div className="login-title">РЕГИСТРАЦИЯ</div>
            <fieldset>
                <form method="get">
                    <input type="email" required placeholder="Введите ваш email" />
                    <input type="text" required placeholder="Придумайте логин" />
                    <input type="password" required placeholder="Придумайте пароль" /> 
                    <input type="submit" placeholder="ВОЙТИ"/>
                    <span>Есть аккаунта? <Link to="/login">Войти</Link></span>
                </form>
            </fieldset>
          </div>
        </>
    )
}

export default Register;
