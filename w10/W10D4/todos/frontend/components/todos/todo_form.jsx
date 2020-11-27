import React from 'react';
import ReactDOM from 'react-dom';
import uniqueId from '../../util/util';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",

        }

        this.titleChange = this.titleChange.bind(this);
        this.bodyChange = this.bodyChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    titleChange(e){
        this.setState({title: e.target.value})
    }

    bodyChange(e){
        this.setState({body: e.target.value})
    }

    submitForm(e){
        e.preventDefault();
        this.props.receiveTodo({id: uniqueId(), title: this.state.title, body: this.state.body})
    }

    render(){
        return (
            <form onSubmit={this.submitForm}>
                <h4>New Todo</h4>
                <label>Title: </label>
                <input type="text" value={this.state.title} onChange={this.titleChange}/>
                <br />
                <label>Body: </label>
                <input type="text" onChange={this.bodyChange} value={this.state.body} />
                <br />
                <button onClick={()=>this.submitForm(this.state.title, this.state.body, this.state.id)}>Submit</button>
                <br />
                <br />
            </form>
        )

    }
}

export default TodoForm;