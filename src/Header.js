import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import logo from './assets/logo1.png';

const Header = (props) => {
    console.log('Inside Header', props);
    const {menuitem1, menuitem2, menuitem3} = props;
    return(
        <Row className="bg-info">
            <Col xs={12}>
                <header>
                    <img src={logo} className="logo"/>
                </header>
                {/* <div className="header-div">
                    <span>Header</span> - 
                    <span></span>
                    <span></span>
                    <span></span>
                    <br/>
                    <div className="header-group">
                        <a className="header-menu" to="/home">Home</a> {' '}
                        <a className="header-menu" to="/launchpad">Launchpad</a>{' '}
                        <a className="header-menu" to="/fees">Fees</a>{' '}
                        <a className="header-menu" to="/classcompdetail">Class Components</a>{' '}
                    </div>
                </div> */}

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active header-menu" aria-current="page" to="/home">{menuitem1}</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/about">{menuitem2}</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/courses">{menuitem3}</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/classcompdetail">Class Components</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/functionaleffect">Functional Effect</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/form">Form</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/todo">To Do</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/todoassg">To Do Assg</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/hoc1">HOC 1</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/hoc2">HOC 2</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/github/1">GitHub</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link header-menu" to="/ref">Ref</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" href="#">Action</Link></li>
                                <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                    </nav>

            </Col>
        </Row>
    );
}

export default Header;
