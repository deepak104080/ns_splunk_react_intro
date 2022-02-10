import React from 'react';
import { Link } from "react-router-dom";

const GitHub = () => {
    const pages = [1,2,3,4,5,6,7,8,9];
    return (
        <>  
            {/* <Link className="nav-link header-menu" to="/github/1">Page 1</Link>
            <Link className="nav-link header-menu" to="/github/2">Page 2</Link>
            <Link className="nav-link header-menu" to="/github/3">Page 3</Link>
            <Link className="nav-link header-menu" to="/github/4">Page 4</Link> */}
            {pages && pages.map((item) => {
                var temp = '/github/'+item;
                return(
                    <Link className="nav-link header-menu" to={temp}>Page {item}</Link>
                )
            })}
        </>
    );

}

export default GitHub;