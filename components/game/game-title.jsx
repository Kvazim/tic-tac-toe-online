import Link from "next/link";
import { ArrowIcon } from "./icons/arrow-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { TimeIcon } from "./icons/time-icon";

export function GameTitle() {
  return <div className="pl-2">
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
      <ArrowIcon />
      На Главную
    </Link>
    <h1 className="text-4xl leading-tight">Крестики нолики</h1>
    <div className="flex items-center gap-3 text-xs text-slate-400">
      <StarIcon />
      <div className="flex items-center gap-1">
        <UserIcon />
        <span>2</span>
      </div>
      <div className="flex items-center gap-1">
        <TimeIcon />
        <p><span>1</span> мин на ход</p>
      </div>
    </div>
  </div>;
}
