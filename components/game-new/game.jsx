import { useCallback, useMemo, useReducer } from "react";
import { PLAYERS } from "./constants";
import {
  GAME_STATE_ACTIONS,
  gameReduser,
  initialGameState
} from "./model/game-reduser";
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
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameReduser,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initialGameState
  );

  useInterval(1000, !!gameState.currentMoveStart, useCallback(() => {
    dispatch({
      type: GAME_STATE_ACTIONS.TICK,
      now: Date.now(),
    });
  }, []));

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentMove } = gameState;

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

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
          PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
            const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);

            return (
              <PlayerInfo
                key={player.id}
                avatar={player.avatar}
                name={player.name}
                symbol={player.symbol}
                rating={player.rating}
                isRight={index % 2 === 1}
                timer={timer}
                timerStartAt={timerStartAt}
              />
            );
          })
        }
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={
          cells.map((cell, index) => (
            <GameCell
              key={index}
              index={index}
              isWinner={winnerSequence?.includes(index)}
              isDisabled={!!winnerSymbol}
              onClick={handleCellClick}
              symbol={cell}
            />
          ))}
      />
      <GameOverModal
        players={
          PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              symbol={player.symbol}
              rating={player.rating}
              isRight={index % 2 === 1}
              timer={gameState.timers[player.symbol]}
            />
          ))
        }
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
