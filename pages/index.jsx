import { useState } from 'react';
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState
} from '../components/game';
import { Header } from '../components/header';


export default function HomePage() {
  const [playersCount] = useState(4);
  const {cells, currentMove, nextMove, winnerSequence, handleCellClick, handlePlayerTimeOver, winnerSymbol} = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          isWinner={!!winnerSymbol}
          currentMove={currentMove}
          onPlayerTimeOver={handlePlayerTimeOver}
          className="mt-4"
        />
        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          handleCellClick={handleCellClick}
          className="mt-6"
        />
      </main>
    </div>
  );
}
