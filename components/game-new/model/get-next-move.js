import { MOVE_ORDER } from "../constants";

export const getNextMove = ({ currentMove, playersCount, timers }) => {
    const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount).filter((symbol) => timers[symbol] > 0);
    const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;

    return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
};
