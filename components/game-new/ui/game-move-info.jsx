import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <p className="flex items-center gap-1 text-xl leading-tight font-semibold">
        Ход:
        <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </p>
      <p className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий:
        <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </p>
    </>
  );
}
