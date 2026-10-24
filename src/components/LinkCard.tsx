type Props = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-full border border-white/70 bg-white/70 px-6 py-4 text-center text-[15px] font-medium tracking-tight shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
