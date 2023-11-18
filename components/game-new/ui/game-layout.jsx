export function GameLayout({ backLink, gameTitle, gameInfo, playerList }) {
  return (
    <div>
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
    </div>
  );
}
