import { Button } from 'bootstrap';
import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap';

const ApiFunction = (props) => {
    const [apiData, setApiData] = useState([]);

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
            <Col xs={12} className="bg-danger">
                {/* <Button variant="primary">Call API</Button> */}
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