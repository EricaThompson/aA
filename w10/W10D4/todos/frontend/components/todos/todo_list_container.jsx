import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
    //state === application (redux) state
    todos: allTodos(state)
});

// returns an object that gets put into props
const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
