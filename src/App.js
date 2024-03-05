import './App.css';
import React, { useCallback, useState } from 'react';
import DurationExercise from './components/DurationExercise';
import RepetitionExercise from './components/RepetitionExercise';
import RunningExercise from './components/RunningExercise';

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const RUNNING_EXERCISE = "running";

const exerciseList = [
  { type: DURATION_EXERCISE, name: "Planks" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
  { type: RUNNING_EXERCISE, name: "Running" }
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(null);

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  let screenComponent = null;

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map((exercise, index) => (
            <li key={index}>
              <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise?.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break
        case RUNNING_EXERCISE:
        screenComponent = (
          <RunningExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );

        break;
      default:
        screenComponent = null;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
