import React from "react";
import './App.css';

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        counter:0,
    }
    };
    resetCount() {
        this.setState({counter:this.state.counter}); 
    }
    incrementCount() {
        this.setState({counter:this.state.counter + 5});
    }
    decrementCount() {
        this.setState({counter:this.state.counter - 5});
    }
    render() {
        return (
            <div>
        <p className="Counter"> <span>Counter - {this.state.counter}</span></p>
        <button onClick={() => this.resetCount()} className="Reset">Reset</button>
        <button onClick={()=>this.incrementCount()} className="Increment">Increment</button>
        <button onClick={()=>this.decrementCount()} className="Decrement">Decrement</button>
            </div>
        )
    };
}


export default App1;