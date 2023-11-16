import { useState } from 'react';
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState
} from '../components/game';
import { Header } from '../components/header';
import { UiModal } from '../components/uikit/ui-modal';
import { UiButton } from '../components/uikit/ui-button';


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
        <UiModal width="md" isOpen={winnerSymbol} onClose={() => console.log("close")}>
          <UiModal.Header>Игра завершена</UiModal.Header>
          <UiModal.Body>
            <p className="text-sm">Победитель: <span className="text-teal-600">Paromovevg</span></p>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">Вернуться</UiButton>
            <UiButton size="md" variant="primary">Играть снова</UiButton>
          </UiModal.Footer>
        </UiModal>
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
