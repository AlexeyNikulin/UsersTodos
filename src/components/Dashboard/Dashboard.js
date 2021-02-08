import React from 'react'
import Header from '../Header/Header';
import SearchPanel from '../Search-Panel/Search-Panel';
import List from '../List/List';
import ItemStatusFilter from '../Item-Status-Filter/Item-Status-Filter';
import ItemAddForm from '../Item-Add-Form/Item-Add-Form';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <Header />

            <div className="search-panel d-flex">
                <SearchPanel />

                <ItemStatusFilter />
            </div>

            <List />

            <ItemAddForm />
      </div>
    )
}

export default Dashboard;