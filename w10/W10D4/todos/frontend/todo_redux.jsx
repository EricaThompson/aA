import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import todosReducer from './reducers/todos_reducer';

document.addEventListener("DOMContentLoaded", () => {
    

    const store = configureStore();

    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.newTodos = todosReducer.newTodos;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}>Todos App</Root>, root);
});