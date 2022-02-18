import React, {Component, useState, useEffect} from "react";
let int1, int2, int3;

const AssgPomodoro = () => {
  const [worktime, setWorktime] = useState(25);
  const [breaktime, setBreaktime] = useState(5);
  const [timerMinInProgress, setTimerMinInProgress] = useState(0);
  const [timerSecInProgress, setTimerSecInProgress] = useState(0);
  const [worktimestatus, setworktimestatus] = useState(true);
  const [restart, setrestart] = useState(false);

  
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
    if(!restart) {
      setTimerMinInProgress(worktime - 1);
      setTimerSecInProgress(60);
    }
    int1 = setInterval(()=> {
      setTimerSecInProgress(timerSecInProgress => timerSecInProgress - 1);
    },1000)
    int2 = setInterval(()=> {
      setTimerMinInProgress(timerMinInProgress => timerMinInProgress - 1);
      setTimerSecInProgress(60);
    },60000)
    int3 = setTimeout(() => {
      alert('work duration is over');
      clearInterval(int1);
      clearInterval(int2);
      setworktimestatus(!worktimestatus);
      startBreakTime();
    },restart ? timerMinInProgress*60*1000 + timerSecInProgress*1000 : worktime*60*1000)
  }


  const startBreakTime = () => {
    setTimerMinInProgress(breaktime - 1);
    setTimerSecInProgress(60);
    int1 = setInterval(()=> {
      setTimerSecInProgress(timerSecInProgress => timerSecInProgress - 1);
    },1000)
    int2 = setInterval(()=> {
      setTimerMinInProgress(timerMinInProgress => timerMinInProgress - 1);
      setTimerSecInProgress(60);
    },60000)
    int3 = setTimeout(() => {
      alert('break duration is over');
      clearInterval(int1);
      clearInterval(int2);
      setworktimestatus(!worktimestatus);
      startTimer();
    },breaktime*60*1000)
  }

  const stopTimer = () => {
      clearInterval(int1);
      clearInterval(int2);
      setrestart(true);
      console.log('Timer stopped...');
  }
  const resetTimer = () => {
    clearInterval(int1);
    clearInterval(int2);
    setTimerMinInProgress(0);
    setTimerSecInProgress(0);
    setworktimestatus(true);
    setrestart(false);
  }

  return (
    <div id="main">
      <br></br>
      <h2>{timerMinInProgress }:{ timerSecInProgress}</h2>
      <h4>{worktimestatus ? 'Work-Time' : 'Break-Time'}</h4>
      <br></br>
      <div>
        <button onClick={startTimer} data-testid='start-btn'>Start</button>
        <button onClick={stopTimer} data-testid='stop-btn'>Stop</button>
        <button onClick={resetTimer} data-testid='reset-btn'>Reset</button>
      </div>
      <br></br>
      <div>
        <form onSubmit={setTimers}>
          <input type="number" name="tempworktime" value={tempworktime !== 0 ? tempworktime : worktime} onChange={handleChange1} placeholder="work duration" data-testid='work-duration' />
          <input type="number" name="tempbreaktime" value={tempbreaktime !== 0 ? tempbreaktime : breaktime} onChange={handleChange2} placeholder="break duration" data-testid='break-duration' />
          <button type="submit" data-testid='set-btn'>Set</button>
        </form>
      </div>
      <br></br>
    </div>
  )
}


export default AssgPomodoro;


//missing functionalities - breaktime for restart, setinterval for restart for min
//edge cases and enable disable
//optimization