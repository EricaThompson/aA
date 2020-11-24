import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props),
        this.state = {
            date: new Date()
        }
    }

    tick(){
        this.setState({date: new Date()})
    }

    componentDidMount() {
        this.tickID = setInterval(()=> this.tick(), 1000) //sets to current time
    }

    componentWillUnmount() {
        clearInterval(this.tickID);
        this.tickID = 0;
    }
    
    with_leading_zeros(method) {
        return (method < 10 ? '0' : '') + method;
    }

    getDayOfTheWeek(num) {
        let weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        return weekday[num];
    }

    getMonth(num){
        let month = new Array(12);
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        return month[num]
    }
    
    render() {
        return (
        <div className="clock">
                <div className="title">
                    <h1>Clock</h1>
                </div>
            
            <div className="date-time">
                    <h2>
                    <p>Time:</p>
                    <p>
                        {this.with_leading_zeros(this.state.date.getHours())}:{this.with_leading_zeros(this.state.date.getMinutes())}:{this.with_leading_zeros(this.state.date.getSeconds())} PDT
                    </p>
                </h2>
            
                <h2>
                    <p>Date:</p>
                    <p>
                        {this.getDayOfTheWeek(this.state.date.getDay())} {this.getMonth(this.state.date.getMonth())} {this.state.date.getDate()} {this.state.date.getFullYear()}
                    </p>
                </h2>
            </div>
        </div>
        )
    }
}

export default Clock;