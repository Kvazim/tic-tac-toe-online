import Image from 'next/image';
import avatarSrc from './avatar.png';
import clsx from 'clsx';

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start text-teal-600")}>
      <Image className='rounded-full w-12 h-12 object-contain' src={avatar} width={48} height={48} alt="avatar" priority />
      <div className='overflow-hidden'>
        <p className='text-lg leading-tight truncate'>{name}</p>
        <p className='text-slate-400 text-xs leading-tight'>Рейтинг: {rating}</p>
      </div>
    </div>
  );
}
