  
import React from 'react';

import './List-Item.css';

const ListItem = ({ important, done, label }) => {

  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' text-warning';
  }

  if (done) {
    classNames += ' done';
  }


  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label">{label}</span>

      <button type="button"
              className="btn btn-warning btn-sm float-right">
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="btn btn-danger btn-sm float-right">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default ListItem;