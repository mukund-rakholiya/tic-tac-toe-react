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
        <Square value={array[1]} />
        <Square value={array[2]} />
      </div>

      <div className="board-row">
        <Square value={array[3]} />
        <Square value={array[4]} />
        <Square value={array[5]} />
      </div>

      <div className="board-row">
        <Square value={array[6]} />
        <Square value={array[7]} />
        <Square value={array[8]} />
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
