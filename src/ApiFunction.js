import { Button } from 'bootstrap';
import React, {useState, useContext, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import {DataAppContext} from './DataApp';

const ApiFunction = (props) => {
    const [apiData, setApiData] = useState([]);
    const tempVal = useContext(DataAppContext);
    console.log('... Home Page - APi Function ...');

    const callApi = () => {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then((response) => {
            return response.json();
        })
        .then((responsedata) => {
            console.log(responsedata.data);
            setApiData(responsedata.data);
            //console.log(apiData); /apiData will have old value.
        })
        .catch((err) => {
            console.log('Error - ', err);
        })
    }

    return(
        <>
        <Row>
            <Col xs={12}>
                {/* <Button variant="primary">Call API</Button> */}
                <br></br>
                <div>Implementation of App Level Data - Context API</div>
                <div>Account Balance - {tempVal.accountbalance}</div>
                <br></br>
                <div>-------------------------</div>
                <br></br>
                <button className="btn btn-primary" onClick={callApi}>Call API</button>
                
                <br></br>
                <br></br>
                <ul className="font-12">
                    {
                        apiData && apiData.map((item, index) => {
                            return (
                                <li id={item.Nation + index} key={item.Nation + index}>{item.Nation} - {item.Population}</li>
                            )
                        })
                    }
                </ul>
                <br></br>
                <br></br>
            </Col>
        </Row>
        </>
    );
}

export default ApiFunction;