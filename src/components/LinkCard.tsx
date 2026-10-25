type Props = {
  title: string;
  url: string;
  clicks: number;
  onClick: () => void;
};

export default function LinkCard({ title, url, clicks, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block rounded-full border border-white/70 bg-white/70 px-14 py-4 text-center text-[15px] font-medium tracking-tight shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums opacity-50">
        {clicks.toLocaleString()}회
      </span>
    </a>
  );
}
