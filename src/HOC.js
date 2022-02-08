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
                console.log('value blank');
                tempfiltereddata = this.state.orgdatalist;
                console.log(this.state.orgdatalist);
                console.log(tempfiltereddata);
            }
            else {
                console.log('value not blank');
                tempfiltereddata = this.state.orgdatalist.filter((item) => {
                    return item.indexOf(e.target.value) >=0;
                })
                console.log(this.state.orgdatalist);
                console.log(tempfiltereddata);
            }
            
            this.setState({
                tempinput: e.target.value,
                datalist: tempfiltereddata,
                orgdatalist: this.state.datalist
            })
        }
        render() {



            return(
                <>

                <input type="text" value={this.state.tempinput} onChange = {(e) => this.filterFn(e)}/>
                <InputComponent hocVar1="text1" dataRet={this.state.datalist} />
                {/* <div>This is HOC file.</div> */}




                </>
            )
        }
    }
    return OutputComponent;
}

export default withHoc;