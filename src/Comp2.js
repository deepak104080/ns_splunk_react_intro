import React from 'react';
import withHoc from './HOC';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Comp2 extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['market', 'shopping', 'travel', 'officework']
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
                    <div>This is a class component - comp 2 - {this.props.hocVar1}</div>
                    <div>---------------</div>
                    <br></br>
                </Col>
            </Row>
            </>
        )
    }
}
export default withHoc(Comp2, ['market', 'shopping', 'travel', 'officework']);


