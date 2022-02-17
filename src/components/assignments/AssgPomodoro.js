import React, {Component, useState, useEffect} from "react";

const AssgPomodoro = () => {
  const [worktime, setWorktime] = useState(25);
  const [breaktime, setBreaktime] = useState(5);
  const [worktimeInProgress, setWorktimeInProgress] = useState('');
  const [breaktimeInProgress, setBreaktimeInProgress] = useState('');

  const [tempworktime, settempworktime] = useState(0);
  const [tempbreaktime, settempbreaktime] = useState(0);





  const initialValues = {username: '', email: '', password: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange1 = (e) => {
        console.log('Inside Handle Change Work Time - ', e.target.name, e.target.value );
        let name = e.target.name;
        let value = e.target.value;
        settempworktime(e.target.value);
    }
    const handleChange2 = (e) => {
      console.log('Inside Handle Change Break Time - ', e.target.name, e.target.value );
      let name = e.target.name;
      let value = e.target.value;
      settempbreaktime(e.target.value);
  }

    const setTimers = (e) => {
        e.preventDefault();
        setWorktime(tempworktime);
        setBreaktime(tempbreaktime);
    }


    // useEffect(() => {
    //     console.log('Inside use effect');
    //     if(Object.keys(formErrors).length == 0 && showmessage) {
    //         console.log('Inside Handle Submit - ', formValues);
    //         // fetch('url', 'POST', formValues);
    //         setFormValues(initialValues);
    //     }
    // }, [formErrors])

    // const validate = (formValues) => {
    //     const errors = {};
    //     if(!formValues.username) {
    //         errors.username = 'Username should not be blank';
    //     }
    //     if(!formValues.email) {
    //         errors.email = 'Email should not be blank';
    //     }
    //     return errors;
    // }


useEffect(() => {
  console.log('work time - ', worktime);
  console.log('break time - ', breaktime);
}, [worktime, breaktime])





  const startTimer = () => {

  }
  const stopTimer = () => {
    
  }
  const resetTimer = () => {
    
  }

  return (
    <div id="main">
      <br></br>
      <h2>{worktime}</h2>
      <h4>Work/Break Heading</h4>
      <br></br>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <br></br>
      <div>
        <form onSubmit={setTimers}>
          <input type="number" name="tempworktime" value={tempworktime !== 0 ? tempworktime : worktime} onChange={handleChange1} placeholder="work duration" />
          <input type="number" name="tempbreaktime" value={tempbreaktime !== 0 ? tempbreaktime : breaktime} onChange={handleChange2} placeholder="break duration" />
          <button type="submit">Set</button>
        </form>
      </div>
      <br></br>
    </div>
  )
}


export default AssgPomodoro;