import { MOVE_ORDER } from "../constants";

export const getNextMove = (currentMove, playersCount, playerTimeOver) => {
    const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount).filter((simbol) => !playerTimeOver.includes(simbol));
    const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;

    return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
};
