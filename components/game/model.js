import { MOVE_ORDER } from "./constants";



export const getNextMove = (currentMove, playersCount) => {
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;

  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
};

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexses) {
    let result = true;

    for (let i = 1; i < indexses.length; i++) {
      result &&= !!cells[indexses[i]];
      result &&= cells[indexses[i]] === cells[indexses[i-1]];
    }

    return result;
  }

  function getSequenceIndexses(i) {
    const res = [
      [], // горизонталь -
      [], // вертикаль \
      [], // вертикаль /
      [], // вертикаль |
    ];

    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(j - gap + i);
      res[1].push(fieldSize * (j - gap) + (j - gap) + i);
      res[2].push(-fieldSize * (j - gap) + (j - gap) + i);
      res[3].push(fieldSize * (j - gap) + i);
    }

    const x = i % fieldSize;

    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i=0; i< cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexses(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  return undefined;
}
