import Image from 'next/image';
import logoSrc from './logo.svg';
import { Profile } from '../profile';
import { ArowIconDown } from './icons/arow-icon-down';

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image className="w-40.75 h-13.25 object-contain" src={logoSrc} alt="logo" priority />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight">Играть</button>
      <button className="ml-auto flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors">
        <Profile />
        <ArowIconDown />
      </button>
    </header>
  );
}
