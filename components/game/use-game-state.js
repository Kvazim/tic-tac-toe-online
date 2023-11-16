import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersCount) {
  const [{cells, currentMove, playerTimeOver}, setGameState] = useState(
    () => ({
      cells: new Array(19*19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playerTimeOver: [],
  }));

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playerTimeOver);
  const winnerSymbol = nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount,lastGameState.playerTimeOver),
        cells: lastGameState.cells.map((cell, i) => i === index ? lastGameState.currentMove : cell)
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {

      return {
        ...lastGameState,
        playerTimeOver: [...lastGameState.playerTimeOver, symbol],
        currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playerTimeOver),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  };
}
