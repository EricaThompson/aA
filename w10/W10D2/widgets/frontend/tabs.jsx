import React from 'react';
// import Header from './header';
import Content from './content';

class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            content: ""
        }
    }

    changeStateIndex(index) {
        this.setState({ index }, () => console.log(this.state.index))
    }
    
    selectedContent(){
        // const content = this.props.content;
        // return content;
        this.setState({content: this.props.content})
    }

    render(){

        return (
            <div className="tabs">
                    <Content className="content" content={this.state.content}/>
                <ul>
                    <h3 onClick={()=>this.changeStateIndex(this.props.idx), ()=>this.selectedContent()}>{this.props.title}</h3>
                    {/* <Header onClick={() => this.changeStateIndex(this.props.idx), () => this.selectedContent()} title={this.props.title} idx={this.props.idx}/> */}
                </ul>
                    {/* <article>{this.state.content}</article> */}
            </div>
        )
        
    }

}

export default Tabs;