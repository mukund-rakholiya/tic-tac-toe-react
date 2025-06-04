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
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null))

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={setSquares} />
        <Square value={squares[1]} onSquareClick={setSquares} />
        <Square value={squares[2]} onSquareClick={setSquares} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={setSquares} />
        <Square value={squares[4]} onSquareClick={setSquares} />
        <Square value={squares[5]} onSquareClick={setSquares} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={setSquares} />
        <Square value={squares[7]} onSquareClick={setSquares} />
        <Square value={squares[8]} onSquareClick={setSquares} />
      </div>

    </>
  );
};

type SquareProps = {
  value: string
  onSquareClick: Function
};

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <>
      <button className="square" onClick={() => onSquareClick} > {value} </button>
    </>
  );
};

export default App;
