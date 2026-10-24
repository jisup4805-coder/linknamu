import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-8">
        <ProfileHeader name={profile.name} bio={profile.bio} photo={profile.photo} />
      </div>

      <ul className="mt-12 space-y-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
