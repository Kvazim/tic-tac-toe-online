import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cell-click',
};

export const gameStateReduser = (state, actions) => {
  switch (actions.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index } = actions;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.playerTimeOver
        ),
        cells: state.cells.map((cell, i) => i === index ? state.currentMove : cell)
      };
    }

    default: {
      return state;
    }
  };
};

export const initialGameState = ({
  playersCount,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
});
