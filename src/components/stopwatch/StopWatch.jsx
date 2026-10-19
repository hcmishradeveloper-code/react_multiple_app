import { useState } from "react";
import {Link} from 'react-router-dom';

function StopwatchTimer() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startHandler = () => {
    if (intervalId !== null) return;
    let id = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
    setIntervalId(id);
  };

  const stopHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetHandler = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  const timerHandler = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:
            ${String(minutes).padStart(2, "0")}:
            ${String(seconds).padStart(2, "0")}.
            ${String(ms).padStart(2, "0")}
    `;
  };

  return (
    <div style={{width: "250px", margin: "auto"}}>
    <div style={styles.contain}>
      <h2>Stop watch timer</h2>
      <h1 >{timerHandler()}</h1>
      <div style={styles.btn_contain}>
        <button style={styles.btn} onClick={startHandler}>
          Start
        </button>
        <button style={styles.btn} onClick={stopHandler}>
          Stop
        </button>
        <button style={styles.btn} onClick={resetHandler}>
          Reset
        </button>
      </div>  
    </div>
    <Link className="link_click" to="/">Return to Home page</Link>
    </div>
  );
}

export default StopwatchTimer;

const styles = {
  contain: {
    width: "250px",
    margin: "auto",
    background: "skyblue",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "2rem",
    boxShadow: "6px 10px 4px gray",
  },
  btn_contain: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  btn: {
    padding: "3px 10px",
    borderRadius: "8px",
    background: "green",
    marginTop:'1rem',
    marginLeft:"-1rem",
    color: "white",
    cursor: "pointer",
  },
};
