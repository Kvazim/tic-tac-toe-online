import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  return (
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
        PLAYERS.map((player, index) => (
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
    />
  );
}
