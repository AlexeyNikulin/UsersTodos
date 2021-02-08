  
import React from 'react';

import './Header.css';

const Header = () => {

    const toDo = 1,
          done = 2;

    return (
        <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default Header;