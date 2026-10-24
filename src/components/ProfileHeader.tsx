type Props = {
  name: string;
  bio: string;
  photo: string | null;
};

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full border-4 border-white bg-orange-100 shadow-lg shadow-orange-900/10 dark:border-white/10 dark:bg-stone-800">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-stone-500 dark:text-stone-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{bio}</p>
    </header>
  );
}
