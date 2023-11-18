import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cell-click',
  TICK: 'tick',
};

export const initialGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
  currentMoveStart,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }

    return timers;
  }, {})
});

export const gameReduser = (state, actions) => {
  switch (actions.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = actions;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCells(state, index),
        timers: updateTimers(state, now),
      };
    }

    case GAME_STATE_ACTIONS.TICK: {
      const { now } = actions;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }

    default: {
      return state;
    }
  };
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  }
}

function updateCells(gameState, index) {
  return gameState.cells.map((cell, i) => i === index ? gameState.currentMove : cell);
}

function isTimeOver(gameState, now) {
  const timers = updateTimers(gameState, now)[gameState.currentMove];

  return timers <= 0;
}
