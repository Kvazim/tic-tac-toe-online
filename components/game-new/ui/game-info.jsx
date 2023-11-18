import { StarIcon } from "./icons/star-icon";
import { TimeIcon } from "./icons/time-icon";
import { UserIcon } from "./icons/user-icon";

export function GameInfo({
  playersCount,
  isRatingGame,
  timeMode
}) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon />
        <span>{playersCount}</span>
      </div>
      <div className="flex items-center gap-1">
        <TimeIcon />
        {timeMode}
      </div>
    </div>
  );
}
