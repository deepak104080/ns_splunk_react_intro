import React, {useState,createContext} from 'react';

const DataAppContext = createContext();

const DataApp = (props) => {
    const tempData = 'Mr XYZ';
    const [accountbalance, setAccountBalance] = useState(0);

    const updateBalance = () => {
        console.log('context function hitting...');
        setAccountBalance(accountbalance => accountbalance + 1);
    }
    //api call and set data in a local state variable.

    return (
        <DataAppContext.Provider value={{accountbalance, updateBalance}}>
            {props.children}
        </DataAppContext.Provider>
    )
}

export default DataApp;

export {DataAppContext};


// useMemo
// Break into multiple components
// Redux