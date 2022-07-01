import { useState, useEffect } from 'react';

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
    highScore: 0,
    prevValue: '',
    arr: ['a', 'b', 'c', 'd'],
  });

  useEffect(() => {
    setState((state.arr = shuffle(state.arr)));
  }, [score]);

  return <div className="App"></div>;
}

export default App;
