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
      className="block rounded-xl border border-stone-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800"
    >
      {title}
    </a>
  );
}
