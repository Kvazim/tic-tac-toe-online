import Link from "next/link";
import { ArrowIcon } from "./icons/arrow-icon";

export function BackLink() {
  return (
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
      <ArrowIcon />
      На Главную
    </Link>
  );
}
