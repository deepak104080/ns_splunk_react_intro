// import { Button } from 'bootstrap';
import React from 'react';
import {Button} from 'react-bootstrap';

class ClassComp extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    increaseCount = () => {
        console.log('Increasing count...');
        // this.state = {
        //     count:this.state.count + 1
        // }
        this.setState(
            {
                count:this.state.count + 1
            }
        )
    }

    decreaseCount = () => {
        console.log('Decreasing count...');
        // this.state = {
        //     count:this.state.count - 1
        // }
        this.setState(
            {
                count:this.state.count - 1
            }
        )
    }

    // state
    // context api
    // lifecycle methods

    // React v 16.8 - Hooks

    // displayComp = () => {
    //     console.log('inside fn of class comp');
    // }

    //Lifecycle methods
    render(){
        return(
            <>
                <div className="course_header">Inside Main - Class Comp</div>
                <div>Class Count = {this.state.count}</div>
                <Button variant="primary" onClick={this.increaseCount}>Increase</Button>
                <Button variant="primary" onClick={this.decreaseCount}>Decrease</Button>
            </>
        )
    }

}

export default ClassComp;