import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar-1.png"
import avatarSrc2 from "./images/avatar-2.png"
import avatarSrc3 from "./images/avatar-3.png"
import avatarSrc4 from "./images/avatar-4.png"

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 3,
    name: "KJlfskfdhlksdhfsdlfkhdshldfsdkdjfklsd",
    rating: "1230",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 4,
    name: "Paromovevg",
    rating: "1230",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.CROSS,
  },
];

export function GameInfo({ className, playersCount }) {
  return (
    <div className={clsx("grid grid-cols-2 gap-3 justify-between bg-white rounded-2xl shadow-md px-8 py-4", className)}>
      {
        players.slice(0, playersCount).map((player, index) => <PlayerInfo playerInfo={player} key={player.id} isRight={index % 2 === 1} />)
      }
    </div>
  );
}

function PlayerInfo({playerInfo, isRight}) {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="flex w-5 h-5 bg-white rounded-full shadow absolute -left-1 -top-1 items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
      <div className={clsx("text-slate-900 text-lg font-semibold", isRight && "order-1")}>01:08</div>
    </div>
  );
}
