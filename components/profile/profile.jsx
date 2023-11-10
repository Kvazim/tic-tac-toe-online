import Image from 'next/image';
import avatarSrc from './avatar.png';
import clsx from 'clsx';

export function Profile({ className }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start text-teal-600")}>
      <Image className='rounded-full w-12 h-12 object-contain' src={avatarSrc} width={48} height={48} alt="avatar" priority />
      <div>
        <p className='text-lg leading-tight'>Paromovevg</p>
        <p className='text-slate-400 text-xs leading-tight'>Рейтинг: 1230</p>
      </div>
    </div>
  );
}
