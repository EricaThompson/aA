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
        this.setState({ num1: event.currentTarget.value });
    }
    setNum2(event) {
        this.setState({ num2: event.currentTarget.value });
    }

    addNums(event){
        event.preventDefault();
        const sum = parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10);
        this.setState({ result: sum});
    }
    subNums(event) {
        event.preventDefault();
        const sub = parseInt(this.state.num1, 10) - parseInt(this.state.num2, 10);
        this.setState({ result: sub  });
    }
    multNums(event) {
        event.preventDefault();
        const mult = parseInt(this.state.num1, 10) * parseInt(this.state.num2, 10);
        this.setState({ result: mult });
    }
    divNums(event) {
        event.preventDefault();
        const div = parseInt(this.state.num1, 10) / parseInt(this.state.num2, 10);
        this.setState({ result: div });
    }

    clear(event){
        event.preventDefault();
        this.setState({ num1: "", num2: "", result: 0})
    }

    render() {
        const {result, num1, num2} = this.state;

        return (
            <div className="calc">
                <h1>calculator</h1>
                <div className='inputs'>
                    <input onChange={this.setNum1 = this.setNum1.bind(this)} type="text" value={num1} />
                    <input onChange={this.setNum2 = this.setNum2.bind(this)} type="text" value={num2} />
                </div>
                <br />
                <div className="buttons">
                    <button onClick={this.addNums = this.addNums.bind(this)} >+</button>
                    <button onClick={this.subNums = this.subNums.bind(this)} >-</button>
                    <button onClick={this.multNums = this.multNums.bind(this)} >*</button>
                    <button onClick={this.divNums = this.divNums.bind(this)} >/</button>
                    <button onClick={this.clear = this.clear.bind(this)}> clear </button>
                </div>
                <h2>{result}</h2>
            </div>
        );
    }
}

export default Calculator;