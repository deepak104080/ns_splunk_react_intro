import React from 'react';
import withHoc from './HOC';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Comp1 extends React.Component {
    // let temp = ['ram', 'john', 'max', 'ajay']
    // const [users, setUsers] = useState(temp);

    constructor() {
        super();
        this.state = {
            users: ['ram', 'john', 'max', 'ajay']
        }
    }
    render() {
        return(
            <>
            <Row>
                <Col xs={12} className="center">
                   
                    {/* {
                        this.state.users && this.state.users.map((item) => (
                            <div>{item}</div>
                        ))
                    } */}
                    <br></br>
                    {
                        this.props.dataRet && this.props.dataRet.map((item) => (
                            <div>{item}</div>
                        ))
                    }
                    <br></br>
                    <div>---------------</div>
                    <div>This is a class component - comp 1 - {this.props.hocVar1}</div>
                    <div>---------------</div>
                    <br></br>
                </Col>
            </Row>
            </>
        )
    }
}
export default withHoc(Comp1, ['ram', 'john', 'max', 'ajay']);



// HOF - Higher Order Function - which accepts a function as parameter or returns a function.
// array.map, filter, reduce
// Closure


// HOC - Higher Order Component

// Reusability

