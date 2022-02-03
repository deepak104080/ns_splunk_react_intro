import React, { useEffect, useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';


const Functional_Api_Effect = (props) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // debugger;
        console.log('api calling starts...');
        fetch('https://api.github.com/repositories/1296269/issues?page=1&per_page=5')
        .then((response) => {
            //console.log(response);
            return response.json();
        })
        .then((responsedata) => {
            console.log(responsedata);
            setApiData(responsedata);
            //console.log(apiData); /apiData will have old value.
        })
        .catch((err) => {
            console.log('Error - ', err);
        })
    }, []);

    useEffect(() => {
        // debugger;
        console.log('api calling starts on props change...');
        const newUrl = 'https://api.github.com/repositories/1296269/issues?page=' + props.pageNum + '&per_page=5'
        fetch(newUrl)
        .then((response) => {
            //console.log(response);
            return response.json();
        })
        .then((responsedata) => {
            console.log(responsedata);
            setApiData(responsedata);
            //console.log(apiData); /apiData will have old value.
        })
        .catch((err) => {
            console.log('Error - ', err);
        })
    }, [props.pageNum]);

    return (
        <>
            <Row>
                <Col>
                {/* {apiData.length} */}
                <table className="table table-striped">
                <tr>
                                    <th>Number</th>
                                    <th>Title</th>
                                    <th>State </th>
                                    <th>Repo URL</th>
                                    <th>Issue URL</th>
                                </tr>
                    {
                        apiData && apiData.map((item, index) => {
                            return (
                                <tr key={item.number}>
                                    <td>{item.number}</td>
                                    <td>{item.title}</td>
                                    <td>{item.state}</td>
                                    <td><a href={item.repository_url}>Repo URL</a></td>
                                    <td><a href={item.html_url}>Issue URL</a></td>
                                </tr>
                            )
                        })
                    }
                    </table>
                </Col>
            </Row>
        </>
    )
}

export default Functional_Api_Effect;