import './App.css';

function App() {
  return (
    <div>
      <Square />
    </div>
  );
}

function Square() {
  return (
    <>
      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>

      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>

      <div className="board-row">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>

    </>
  );
}

export default App;
