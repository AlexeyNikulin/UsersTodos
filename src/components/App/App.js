import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {authState} from '../../reducer/auth';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './App.css';

const App = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.auth);
    
    useEffect(() => {
        dispatch(authState(false));
    }, []);

    return (
        <div className="todo-app">
            <div className="container">
                {isAuth &&
                    <Switch>
                        <Route exact path="/dashboard" render={() => <Dashboard/>}/>
                        <Redirect to="/dashboard" />
                    </Switch> 
                    || 
                !isAuth &&
                    <Switch>
                        <Route exact path="/login" render={() => <Login/>}/>
                        <Route exact path="/register" render={() => <Register/>}/>
                        <Redirect to="/register" />
                    </Switch>}
            </div>
        </div>
    )
}

export default App;