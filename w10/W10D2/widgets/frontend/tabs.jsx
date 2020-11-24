import React from 'react';


class Tabs extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            index: 0
        }
    }

    changeStateIndex(index){
        this.setState({index},()=>console.log(this.state.index))
    }

    render(){
        return (
            <div>
                <ul>
                    <h1 onClick={()=>this.changeStateIndex(this.props.idx)}>{this.props.title}</h1>
                    <article>{this.props.content}</article>
                </ul>
            </div>
        )
    }

}

export default Tabs;