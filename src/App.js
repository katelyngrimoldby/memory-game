import { useState, useEffect } from 'react';
import Card from './components/Card';

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
    arr: ['a', 'b', 'c', 'd'],
  });

  useEffect(() => {
    setState({ arr: shuffle(state.arr) });
  }, []);

  return (
    <div className="App">
      {state.arr.map((e, i) => {
        return <Card key={i} value={e} />;
      })}
    </div>
  );
}

export default App;
