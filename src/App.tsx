import type React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Board />
    </div>
  );
}

const Board: React.FC = () => {
  return (
    <>
      <div className="board-row">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>

      <div className="board-row">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>

      <div className="board-row">
        <Square value="" />
        <Square value="" />
        <Square value="" />
      </div>

    </>
  );
}

type SquareProps = {
  value: string
}

const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <>
      <button className="square"> {value} </button>
    </>
  )
}

export default App;
