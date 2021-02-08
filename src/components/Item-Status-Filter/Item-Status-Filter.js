  
import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = () => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === 'all';
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-primary');

    return (
      <button key={name}
              type="button"
              className={classNames}>{label}</button>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;