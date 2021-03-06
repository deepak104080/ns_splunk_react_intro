import React, {Component} from 'react';
import RefChild from './RefChild';

class RefClass extends Component {
    constructor(){
        super();
        this.inputRef = React.createRef();
        this.inputRef2 = React.createRef();
        this.divRef3 = React.createRef();
        this.childRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef.current);
        //this.inputRef.current.focus();
        //this.inputRef.current.value = 'Deepak...';
        this.inputRef.current.style.color = 'red';
        this.divRef3.current.style.color = '#a81af2';
        this.divRef3.current.style.background = '#aaaaf0';
        this.formSubmit();
    }
    formSubmit = () => {
        console.log('Data submitted - ', this.inputRef.current.value);
        console.log('Data submitted - ', this.inputRef2.current.value);
        //api call - to verify login
    }
    sendDataToChild = () => {
        this.childRef.current.value = 'My name is xyz.';
    }
    
    render() {
        return(
            <>
                <br></br>
                <input type="text" ref={this.inputRef} placeholder="Enter username" />
                <input type="password" ref={this.inputRef2} placeholder="Enter Password"  />
                
                <button onClick={this.formSubmit}>Login</button>
                <br></br>
                {/* <input id="" type="text" /> */}
                <div ref={this.divRef3}>I work at Newton School.</div>
                <br></br>


                <br></br>
                <div>------------------------</div>
                <button onClick={this.sendDataToChild}>Click here to send data to Ref Child.</button>
                <RefChild ref={this.childRef}/>
            </>
        )
    }
}


export default RefClass;

// ref, forward ref, useRef
// Ref is a way in React to directly interact with actual DOM.

// Forms
// Controlled Components - State var and Effect/Lifecycle
// Uncontrolled Components - Refs
