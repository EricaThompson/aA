import React from 'react';

class Content extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            content: "I am the first"
        }
        
    }

    // selectedContent() {
    //     // const content = this.props.content;
    //     // return content;
    //     this.setState({ content: this.props.content })
    // }

    // UNSAFE_componentWillMount(){
    //     this.setState({ content: this.props.content })
    // }

    render(){
        console.log("props:", this.props)
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export default Content;