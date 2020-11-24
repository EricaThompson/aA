import React from 'react';


class Tabs extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            index: 0
        }

    }



    render(){
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }

}



// const Tabs = ({title, content}) => {
    
    
    
    
    
//     return (
//         <div>
//             <p>{title}</p>
//             <p>{content}</p>
//         </div>
//     )



// }
    // constructor(props){
    //     super(props)
    // }


export default Tabs;