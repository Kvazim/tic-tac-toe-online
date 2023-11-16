import { useState } from 'react';
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState
} from '../components/game';
import { Header } from '../components/header';


export default function HomePage() {
  const [playersCount] = useState(2);
  const {cells, currentMove, nextMove, winnerSequence, handleCellClick} = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          className="mt-4"
        />
        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          handleCellClick={handleCellClick}
          className="mt-6"
        />
      </main>
    </div>
  );
}
