import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from '../List-Item/List-Item';
import {fetchTodos}  from '../../reducer/todos';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-Indicator/Error-Indicator';
import ErrorBoundry from '../Error-Boundry/Error-Boundry';

import './List.css';

const List = () => {

    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(({todos}) => {
        return {
            items: todos.items,
            loading: todos.loading,
            error: todos.error,
        }
    });

    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

    const content = loading || error ? null : items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <ListItem {...itemProps } />
            </li>
        );
    });
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;

    return (
        <ErrorBoundry>
            <ul className="list-group todo-list">
                { errorMessage }
                { spinner }
                { content }
            </ul>
        </ErrorBoundry>
    );
};

export default List;
