type Props = {
  name: string;
  bio: string;
  photo: string | null;
};

export default function ProfileHeader({ name, bio, photo }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-stone-300 bg-stone-200 dark:border-stone-700 dark:bg-stone-800">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-stone-500 dark:text-stone-400">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h1 className="mt-10 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-stone-600 dark:text-stone-400">{bio}</p>
    </header>
  );
}
