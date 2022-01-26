import React from 'react';


const Header = (props) => {
    console.log('Inside Header', props);
    const {menuitem1, menuitem2, menuitem3} = props;
    return(
        <>
            <div>Header</div>
            <div>{menuitem1}</div>
            <div>{menuitem2}</div>
            <div>{menuitem3}</div>
        </>
    );
}

export default Header;