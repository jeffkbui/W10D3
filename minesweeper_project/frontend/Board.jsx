import React from "react";
import * as Minesweeper from '../minesweeper';
import Tile from "./Tile";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTile = this.renderTile.bind(this);
  }

  renderTile(row) {
    return row.map((tile, idx) => {
      return (
        <Tile key={`${idx}`} tile={tile} tileUpdate={this.props.update}/>
      );
    });
  }
  renderRows() {
    return this.props.board.grid.map((row, idx) => {
      return (
        <div className="board">
          {this.renderTile(row)}
        </div>
      )
    });
  }
  render() {
    return (
      <div>
        {this.renderRows()}
      </div>
    )
  }
  
}