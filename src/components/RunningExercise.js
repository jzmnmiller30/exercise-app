import React, { useState } from 'react';

function RunningExercise() {

  const [lapTimes, setLapTimes] = useState([]);


  const recordLap = () => {

    const currentTime = new Date().getTime();

    setLapTimes([...lapTimes, currentTime]);
  };

  return (
    <div>
      {/* Button to record laps */}
      <button onClick={recordLap}>Record Lap</button>

      {/* Display lap times */}
      <div>
        <h2>Lap Times:</h2>
        <ul>
          {/* Map over lapTimes array to display each lap time */}
          {lapTimes.map((lapTime, index) => (
            <li key={index}>{new Date(lapTime).toLocaleTimeString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;

