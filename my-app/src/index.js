import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


/* Il componente Square (quadrato) visualizza un singolo <button>  */
class Square extends React.Component {
render() {
    return (
        /* stiamo passando una funzione come prop onClick */
    <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
    </button>
    );
}
}


/* Board (tavola) 9 quadrati. */
class Board extends React.Component {
renderSquare(i) {
    return <Square value={i} />;
}

render() {
    const status = 'Next player: X';

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
    </div>
    );
}
}



/* Il componente Game (partita) visualizza una tavola con valori segnaposto */
class Game extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
        <Board />
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
