import React from 'react';

const withHoc = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                tempinput:'',
                datalist: data,
                orgdatalist: data
            }
        }

        filterFn = (e) => {
            console.log(e.target.value);
            // this.setState({
            //     tempinput: e.target.value
            // })
            let tempfiltereddata
            if(e.target.value == '') {
                console.log('input value blank');
                tempfiltereddata = this.state.orgdatalist;
                console.log(this.state.orgdatalist);
                console.log(tempfiltereddata);
            }
            else {
                console.log('input value not blank');
                tempfiltereddata = this.state.orgdatalist.filter((item) => {
                    return item.indexOf(e.target.value) >=0;
                })
                console.log(this.state.orgdatalist);
                console.log(tempfiltereddata);
                console.log('---------------------------');
            }
            
            this.setState({
                tempinput: e.target.value,
                datalist: tempfiltereddata,
                orgdatalist: this.state.orgdatalist
            })
        }
        render() {

            return(
                <>
                <br></br>
                <input type="text" value={this.state.tempinput} onChange = {(e) => this.filterFn(e)}/>
                <InputComponent hocVar1="HOC Example" dataRet={this.state.datalist} />
                {/* <div>This is HOC file.</div> */}

                </>
            )
        }
    }
    return OutputComponent;
}

export default withHoc;