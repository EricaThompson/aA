import React from 'react';
import Content from './content';

class Header extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            index: 0,
            content: ""
        }
    }

    changeStateIndex(index) {
        this.setState({ index }, () => console.log(this.state.index))
    }


    render(){
        return (
            <ul>
                <li onClick={()=>this.changeStateIndex(this.props.idx)}>{this.props.title}</li>
                <Content content={this.state.content}/>
            </ul>
        )
    }
}

export default Header;