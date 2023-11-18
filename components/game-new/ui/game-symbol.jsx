import { CrossIcon } from "../ui/icons/cross-icon";
import { ZeroIcon } from "../ui/icons/zero-icon";
import { SquareIcon } from "../ui/icons/square-icon";
import { TriangleIcon } from "../ui/icons/triangle-icon";
import { GAME_SYMBOLS } from "../constants";


export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />
}
