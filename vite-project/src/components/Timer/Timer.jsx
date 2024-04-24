import { useState, useEffect } from 'react'
import './Timer.css'
import axios from 'axios'

function Timer () {

    const [userName, setUserName] = useState(localStorage.getItem('name'))

    const [time, setTime] = useState(
        localStorage.getItem('time') ? JSON.parse(localStorage.getItem('time')) : {hour: 0, minute: 0, second: 0}
    )
    const [isRunning, setIsRunning] = useState(false)



    useEffect(() => {

        const storageTime = localStorage.getItem('time');
        if (storageTime) {
            const obj = JSON.parse(storageTime);
            setTime(obj);
        } else {
            setTime({ hour: 0, minute: 0, second: 0 });
        }
    }, []);
    

    useEffect(() => {
        localStorage.setItem('time', JSON.stringify(time))
        
        if(isRunning) {axios.post('http://192.168.0.101:3000/time', {name: userName, time: time})}

    }, [time])

    useEffect(() => {
        let intervalId;
        
        if (isRunning) {
          intervalId = setInterval(() => {
            setTime((prevTime) => {
              const newSecond = prevTime.second + 1;
              const newMinute = newSecond === 60 ? prevTime.minute + 1 : prevTime.minute;
              const newHour = newMinute === 60 ? prevTime.hour + 1 : prevTime.hour;

              return {
                hour: newHour === 24 ? 0 : newHour,
                minute: newMinute === 60 ? 0 : newMinute,
                second: newSecond === 60 ? 0 : newSecond,
              };
            });
          }, 1000);
        } else {
          clearInterval(intervalId);
        }
    
        return () => clearInterval(intervalId);
      }, [isRunning]);

    return (
        <div className="timeContainer">
            <div className="timer">
                <h1>Focus Time</h1>
                <h2 className='time'>
                    {formating(time.hour)} : {formating(time.minute)} : {formating(time.second)}
                </h2>
                <button className='buttonGroup'>
                    <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'stop' : 'start'}</button>
                </button>
            </div>
        </div>
    )
}

export default Timer