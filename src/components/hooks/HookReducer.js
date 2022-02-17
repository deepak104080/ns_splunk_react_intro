import React, { useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';

const initialValues = {
    count: 0,
    balance: 10000,
    shoNetBalance: false
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENTBY1':
            return {
                count: state.count+1,
                balance: state.balance,
                shoNetBalance: state.shoNetBalance
            }
        case 'INCREMENTBY10K':
            return {
                count: state.count,
                balance: state.balance + 10000,
                shoNetBalance: state.shoNetBalance
            }
        case 'SHOWHIDEBALANCE':
            return {
                count: state.count,
                balance: state.balance,
                shoNetBalance: !state.shoNetBalance
            }
        default:
            return state
    }
}

const HookReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return(
        <>
            <Row>
                <Col>
                    <div>Count - {state.count}</div>
                    <button onClick={() => dispatch({type: 'INCREMENTBY1'})}>Click here for count update.</button>
                    <div>-----------------------</div>
                    <div>Account Balance - {state.balance}</div>
                    <button onClick={() => dispatch({type: 'INCREMENTBY10K'})}>Click here for salary update.</button>
                    <div>-----------------------</div>
                    {state.shoNetBalance && <div>Total Account Balance - {1000000 + state.balance}</div>}
                    <button onClick={() => dispatch({type: 'SHOWHIDEBALANCE'})}>Click here to show total balance</button>
                </Col>
            </Row>
        </>
    );
}

export default HookReducer;

//useReducer ~ useState
