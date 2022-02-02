import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    console.log('Inside Header', props);
    const {menuitem1, menuitem2, menuitem3} = props;
    return(
        <div className="bg-success header-div">
            <span>Header</span> - 
            <span>{menuitem1}</span>
            <span>{menuitem2}</span>
            <span>{menuitem3}</span>
            <br/>
            <div className="header-group">
                <Link className="header-menu" to="/home">Home</Link> {' '}
                <Link className="header-menu" to="/launchpad">Launchpad</Link>{' '}
                <Link className="header-menu" to="/fees">Fees</Link>{' '}
                <Link className="header-menu" to="/classcompdetail">Class Components</Link>{' '}
            </div>
        </div>
    );
}

export default Header;
