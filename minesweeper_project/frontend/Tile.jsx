import React from "react";
import * as Minesweeper from "../minesweeper";

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const flagged = event.altKey ? true : false;
    this.props.tileUpdate(this.props.tile, flagged);

  }
  

  render () {
    const tile = this.props.tile;
    let text = '';
    let count = '';
    let tileClass = '';
    if (tile.explored) {
      if (tile.bombed) {
        text = '🔥';
        tileClass = 'bombed';
      } else {
        tileClass = 'explored';
        count = tile.adjacentBombCount();
        if (count !== 0) {
          text = `${count}`;
        } else {
          text = '';
        }
      }
    } else if (tile.flagged) {
      tileClass = 'flagged';
      text = '🇯🇵';
    } else {
      tileClass = 'unexplored';
    }
    tileClass = `tile ${tileClass}`;

    return (
      <div className={tileClass} onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}
