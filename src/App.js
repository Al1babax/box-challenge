import boxData from './boxes';
import { useState } from 'react';
import Box from './components/box';

function App() {
  const [boxes, setBoxes] = useState(boxData);
  const [scores, setScores] = useState(0);
  const boxArray = boxes.map(box => <Box key={box.id} {...box} onClick={handleClick} />);

  function handleClick(id) {
    let box_id = id
    let isBoxGreen = boxes.find(box => box.id === box_id).on
    setScores(scores => scores + (isBoxGreen ? 1 : -1))
    if (isBoxGreen) {
      setBoxes(prev => prev.map(box => box.id === id ? { ...box, on: !box.on } : box));
      enableRandomBox();
    }
  }

  function resetGame() {
    setBoxes(prev => prev.map(box => box.on === true ? { ...box, on: false } : box));
    setScores(0);
    for (let i = 0; i < 3; i++) {
      setTimeout (() => {enableRandomBox()}, 500);
    }
  }

  function enableRandomBox() {
    let changed = false;
    while (!changed) {
      const randomBox = boxes[Math.floor(Math.random() * (boxes.length + 1))].id;
      if (boxes.find(box => box.id === randomBox).on === false) {
        setBoxes(prev => prev.map(box => box.id === randomBox ? { ...box, on: true } : box));
        changed = true;
      }
    }
  }

return (
  <div>
    <div className='w-screen h-24 text-center'><h1 className='text-2xl font-bold'>Box speed clicking game</h1></div>
    <div className='score w-[200px] mx-auto text-center font-bold size-lg'>Your score is {scores}</div>
    <div>
      <button onClick={resetGame} className="bg-slate-300 p-2 rounded-xl mb-3">Reset Game</button>
    </div>
    <div className='w-[490px] h-[395px] bg-yellow-300 mx-auto'>
      {boxArray}
    </div>
  </div>
);
}

export default App;
