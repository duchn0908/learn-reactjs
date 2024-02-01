import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const inittTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Drink',
            status: 'new',
        }
    ];
    const [todoList, setTodoList] = useState(inittTodoList);
    const [filteredStatus, SetfilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        console.log(todo, idx);

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        SetfilteredStatus('all');
    }
    const handleShowCompleted = () => {
        SetfilteredStatus('completed');
    }
    const handleShowNew = () => {
        SetfilteredStatus('new');
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus);
    //console.log(renderedTodoList);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;