import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();

  const startStopwatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    setRunning(prevRunning => !prevRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
  };

  const formatTime = milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <div className="stopwatch">
        <div className="time">{formatTime(time)}</div>
        <div className="buttons">
          <button className={running ? 'stopButton' : 'startButton'} onClick={startStopwatch}>
            {running ? 'Stop' : 'Start'}
          </button>
          <button className="restartButton" onClick={resetStopwatch}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
