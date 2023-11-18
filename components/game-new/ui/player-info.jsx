import Image from 'next/image';
import { GameSymbol } from "./game-symbol";
import clsx from 'clsx';

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds
}) {

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerRunning = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  }

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center gap-2 text-start text-teal-600 w-44">
          <Image className='rounded-full w-12 h-12 object-contain' src={avatar} width={48} height={48} alt="avatar" priority />
          <div className='overflow-hidden'>
            <p className='text-lg leading-tight truncate'>{name}</p>
            <p className='text-slate-400 text-xs leading-tight'>Рейтинг: {rating}</p>
          </div>
        </div>
        <div className="flex w-5 h-5 bg-white rounded-full shadow absolute -left-1 -top-1 items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}></div>
      <div className={clsx("text-lg font-semibold w-[60px]", isRight && "order-1", getTimerRunning())}>{minutesString}:{secondString}</div>
    </div>
  );
}