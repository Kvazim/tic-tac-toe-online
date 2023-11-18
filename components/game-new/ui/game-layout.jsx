export function GameLayout({
  backLink,
  gameTitle,
  gameInfo,
  playerList,
  gameMoveInfo,
  actions,
  gameCells
}) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 grid grid-cols-2 gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4"
        }
      >
        {playerList}
      </div>
      <div className="mt-6 bg-white rounded-2xl shadow-md px-8 py-4 pt-5 pb-7">
        <div className="flex gap-3 items-center">
          <div className="mr-auto">
            {gameMoveInfo}
          </div>
            {actions}
        </div>
        <div
          className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3"
        >
          {gameCells}
        </div>
      </div>
    </div>
  );
}
