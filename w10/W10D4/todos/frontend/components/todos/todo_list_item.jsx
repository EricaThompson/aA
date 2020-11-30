import React from 'react';
import ReactDOM from 'react-dom';


class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            complete: false,
            status: ""
        }
    }

    updateTodo(){
        // let status;
        this.setState({complete: !this.state.complete})
        
    }


    render(){
        let status;
        if (this.state.complete) {
            status = "Done"
        } else {
            status = "Undo"
        }

        return (
        <li key={this.props.todo.key}>{this.props.todo.title}<button onClick={this.props.removeTodo} >Delete</button><button onClick={()=>this.updateTodo()}>{status}</button></li>
        )
    }
    

}

export default TodoListItem;
