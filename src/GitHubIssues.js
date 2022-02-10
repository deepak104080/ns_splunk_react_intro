import React, { useEffect, useState } from 'react';
import GitHub from './Github';
import {useParams} from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap';

const GitHubIssues = () => {
    let param = useParams();
    console.log('param in github - ', param.pagenum);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        console.log('api calling starts...');
        fetch('https://api.github.com/repositories/1296269/issues?page='+param.pagenum+'&per_page=5')
        .then((response) => {
            return response.json();
        })
        .then((responsedata) => {
            console.log(responsedata);
            setApiData(responsedata);
        })
        .catch((err) => {
            console.log('Error - ', err);
        })
    }, [param]);

    return (
        <>  
            <GitHub/>

            <Row>
                <Col>
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
    );
}

export default GitHubIssues;