import type React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

const Board: React.FC = () => {
  const [array, setArray] = useState<Array<string>>(Array(9).fill(null))

  return (
    <>
      <div className="board-row">
        <Square value={array[0]} />
        <Square value={array[0]} />
        <Square value={array[0]} />
      </div>

      <div className="board-row">
        <Square value={array[0]} />
        <Square value={array[0]} />
        <Square value={array[0]} />
      </div>

      <div className="board-row">
        <Square value={array[0]} />
        <Square value={array[0]} />
        <Square value={array[0]} />
      </div>

    </>
  );
};

type SquareProps = {
  value: string
};

const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <>
      <button className="square" > {value} </button>
    </>
  );
};

export default App;
