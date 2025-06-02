import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-2xl mb-4 uppercase">Medal Count Mini App</h1>
      <h2 className="text-xl mb-4">Sorty by ...</h2>
      <ul className="pl-2">
        <li className="pb-2">
          <Link href="/medals/gold">🥇 Gold medals</Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/silver">🥈 Silver medals</Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/bronze">🥉 Bronze medals</Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/total">🏅 Total medals</Link>
        </li>
      </ul>
    </main>
  );
}
