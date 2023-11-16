import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";


export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence
}) {

  const actions = <>
    <UiButton size="md" variant="primary">Ничья</UiButton>
    <UiButton size="md" variant="outline">Сдаться</UiButton>
  </>

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo actions={actions} currentMove={currentMove} nextMove={nextMove} />
      <GameGrid>
        {
          cells.map((cell, i) => (
            <GameCell
              key={i}
              isWinner={winnerSequence?.includes(i)}
              onClick={() => handleCellClick(i)}
            >
              {cell && <GameSymbol symbol={cell} className="w-5 h-5" />}
            </GameCell>
          ))
        }
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({children, className}) {
  return (
    <div className={clsx(
      className,
      "bg-white rounded-2xl shadow-md px-8 py-4 pt-5 pb-7"
    )}>
      {children}
    </div>
  );
}

function GameMoveInfo({actions, currentMove, nextMove}) {
  return (
    <div className="flex gap-3 items-center">
    <div className="mr-auto">
      <p className="flex items-center gap-1 text-xl leading-tight font-semibold">
        Ход:
        <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </p>
      <p className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий:
        <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </p>
    </div>
    {actions}
  </div>
  );
}

function GameGrid({children}) {
  return (
    <div
      className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3"
    >
      {children}
    </div>
  );
}

function GameCell({children, onClick, isWinner}) {
  return (
    <button
     className={clsx("flex items-center justify-center border border-slate-200 -ml-px -mt-px", isWinner && "bg-orange-600/10")}
     onClick={onClick}
    >
      {children}
    </button>
  );
}
