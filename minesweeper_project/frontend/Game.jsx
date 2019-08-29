import React from "react";
import * as Minesweeper from '../minesweeper';
import Board from "./Board";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(10, 25);
    this.state = {
      board: board
    };
    this.updateGame = this.updateGame.bind(this);
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    )
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({
      board: this.state.board
    })
  }
}