import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Medal Count Mini App</h1>
      <ul>
        <li>
          <Link href="/medals/total">Sorted by Total Medals</Link>
        </li>
        <li>
          <Link href="/medals/gold">Sorted by Gold Medals</Link>
        </li>
        <li>
          <Link href="/medals/silver">Sorted by Silver Medals</Link>
        </li>
        <li>
          <Link href="/medals/bronze">Sorted by Bronze Medals</Link>
        </li>
      </ul>
    </main>
  );
}
