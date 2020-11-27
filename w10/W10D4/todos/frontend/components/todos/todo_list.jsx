import React from 'react';

export default ({todos}) => {

    return (
        <ul>
            {todos.map(todo => <li>{todo.title}</li>)}
        </ul>
    )
}
