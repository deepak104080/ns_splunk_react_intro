import React from 'react';


const Header = (props) => {
    console.log('Inside Header', props);
    const {menuitem1, menuitem2, menuitem3} = props;
    return(
        <div className="bg-success">
            <div>Header</div>
            <span>{menuitem1}</span>
            <span>{menuitem2}</span>
            <span>{menuitem3}</span>
            <br/>
        </div>
    );
}

export default Header;
