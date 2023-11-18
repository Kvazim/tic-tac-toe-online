import { useReducer } from "react";
import { PLAYERS } from "./constants";
import {
  GAME_STATE_ACTIONS,
  gameStateReduser,
  initialGameState
} from "./model/game-state-reduser";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(gameStateReduser, { playersCount: PLAYERS_COUNT }, initialGameState);

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState.currentMove, gameState.playersCount, []);
  const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameTitle={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={4}
            timeMode={"1 мин на ход"}
          />
        }
        playerList={
          PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              symbol={player.symbol}
              rating={player.rating}
              isRight={index % 2 === 1}
              seconds={60}
            />
          ))
        }
        gameMoveInfo={
          <GameMoveInfo currentMove={gameState.currentMove} nextMove={nextMove} />
        }
        gameCells={
          gameState.cells.map((cell, index) => (
            <GameCell
              key={index}
              isWinner={winnerSequence?.includes(index)}
              isDisabled={!!winnerSymbol}
              onClick={() => dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index,
              })
              }
              symbol={cell}
            />
          ))}
      />
      <GameOverModal players={
        PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            symbol={player.symbol}
            rating={player.rating}
            isRight={index % 2 === 1}
            seconds={60}
          />
        ))
      }
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
