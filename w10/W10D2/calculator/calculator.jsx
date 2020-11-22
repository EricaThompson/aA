import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        }
    }

    setNum1(event){
        this.setState({ num1: event.value })
    }
    setNum2(event) {
        this.setState({ num2: event.value })
    }

    render() {
        return (
            <div>
                <input onChange={this.setNum1 = this.setNum1.bind(this)} type="text" value={this.state.num1}/>
                <input onChange={this.setNum2 = this.setNum2.bind(this)} type="text" value={this.state.num2} />
                <h1>{this.state.result}</h1>
            </div>
        );
    }
}

export default Calculator;