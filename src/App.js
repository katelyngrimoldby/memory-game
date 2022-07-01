import { useState, useEffect } from 'react';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import IMAGES from './imgDir';

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
    arr: IMAGES,
    shortArr: [],
  });

  const { score, bestScore, prevValue, arr, shortArr } = state;

  useEffect(() => {
    setState((prevState) => ({ ...prevState, arr: shuffle(arr) }));
    setState((prevState) => ({ ...prevState, shortArr: arr.slice(0, 6) }));
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
    setState((prevState) => ({ ...prevState, shortArr: arr.slice(0, 6) }));
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      {shortArr.map((e, i) => {
        return (
          <Card
            key={i + Date()}
            imgsrc={e[0]}
            value={e[1]}
            callback={() => clickHandler(e)}
          />
        );
      })}
    </div>
  );
}

export default App;
