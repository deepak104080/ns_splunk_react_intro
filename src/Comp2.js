import React from 'react';
import withHoc from './HOC';

class Comp2 extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['market', 'shopping', 'travel', 'officework']
        }
    }
    render() {
        return(
            <>
                {/* <div>This is a class component - comp 2. - {this.props.hocVar1}</div> */}
                <br></br>
                {
                    this.props.dataRet && this.props.dataRet.map((item) => (
                        <div>{item}</div>
                    ))
                }
                <br></br>
            </>
        )
    }
}
export default withHoc(Comp2, ['market', 'shopping', 'travel', 'officework']);


