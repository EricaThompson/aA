import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default (props) => {

    return (
        <ul>
            <TodoForm receiveTodo={props.receiveTodo}/>
            {props.todos.map((todo, idx) => <TodoListItem removeTodo={props.removeTodo} todo={todo} key={idx}/>)}
        </ul>
    )
}
