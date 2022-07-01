import { useState, useEffect } from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';

function App() {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const [state, setState] = useState({
    score: 0,
    bestScore: 0,
    prevValue: '',
    arr: ['a', 'b', 'c', 'd'],
  });

  const { score, bestScore, prevValue, arr } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, arr: shuffle(arr) }));
  }, []);

  const clickHandler = (curValue) => {
    console.log(curValue);
    if (curValue == prevValue) {
      setState((prevState) => ({ ...prevState, score: 0 }));
      setState((prevState) => ({ ...prevState, prevValue: '' }));
    } else {
      if (score == bestScore) {
        setState((prevState) => ({
          ...prevState,
          score: score + 1,
          bestScore: bestScore + 1,
        }));
      } else {
        setState((prevState) => ({ ...prevState, score: score + 1 }));
      }
      setState((prevState) => ({ ...prevState, prevValue: curValue }));
    }
    setState((prevState) => ({ ...prevState, arr: shuffle(arr) }));
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      {state.arr.map((e, i) => {
        return (
          <Card key={i + Date()} value={e} callback={() => clickHandler(e)} />
        );
      })}
    </div>
  );
}

export default App;
