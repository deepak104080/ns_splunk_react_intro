import React from 'react';
import {Row, Col} from 'react-bootstrap';
import CompType from './CompType';
import './css/test.scss';

class ClassCompDetail extends React.Component  {
    constructor() {
        super();
        console.log('Inside constructor');
        this.state = {
            count:1
        }
    }
    updateCount =() => {
        console.log('updating count');
        this.setState(
            {
                count:this.state.count + 1
            }
        )
        // this.state = {
        //     count:this.state.count + 1
        // }
        // this.forceUpdate();
    }
    deletecomp = () => {
        window.location.href = 'http://localhost:3000/home';
    }
    componentDidMount(){
        console.log('Inside component did mount');
    }
    componentDidUpdate(){
        console.log('Inside Component did update...');
    }
    componentWillUnmount() {
        // alert('Component is unmounting...');
        // debugger;
        // console.log('Inside Component will unmount ...');
    }
    render() {
        // let abc = 5;
        console.log('Inside render');
        return(
            <>
            <Row>
                <Col xs={12} className="bg-light">
                    <br></br>
                    <p>This is a class component - Implementation of lifecycle methods - check console</p>
                    <button onClick={this.updateCount}>Update Count</button>
                    <button onClick={this.deletecomp}>Delete comp</button>
                    <br></br>
                    <br></br>
                    {/* <h1>{abc}</h1> */}
                    <div className='test_div'>
                        <p>Test div for scss.</p>
                        <h1>test h1</h1>
                        <button>Button</button>
                    </div>
                </Col>
            </Row>
            <CompType type="class"/>
            </>
        );
    }
}

export default ClassCompDetail;


//Lifecycle methods - sequence pre-defined functions - need not to be called

// ------------------------------------------------
// Mounting + Rendering
// **constructor - first lifecycle method / only first time
// getDerivedStatefromProps
// **render - jsx
// **componentDidMount - just after mount/render
// ------------------------------------------------
// Re-Rendering
// getDerivedStatefromProps
// shouldComponentUpdate - shallow comparison for state and props - true/false
// **render
// getSnapshotBeforeUpdate
// **componentDidUpdate
// ------------------------------------------------
// Unmounting
// **componentWillUnmount
// ------------------------------------------------
// Error Handling
// getDerivedStateFromError
// componentDidCatch



// PureComponent