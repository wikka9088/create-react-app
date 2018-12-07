import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Current time is: </h1>
                <h2>{this.state.time.toLocaleString()}</h2>
            </div>
        )
    }
}

export default Clock;