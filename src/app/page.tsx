import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-2xl mb-4 uppercase">Medal Count Mini App</h1>
      <ul className="list-disc pl-5">
        <li className="pb-2">
          <Link href="/medals/total" className="underline">
            Sorted by Total Medals
          </Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/gold" className="underline">
            Sorted by Gold Medals
          </Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/silver" className="underline">
            Sorted by Silver Medals
          </Link>
        </li>
        <li className="pb-2">
          <Link href="/medals/bronze" className="underline">
            Sorted by Bronze Medals
          </Link>
        </li>
      </ul>
    </main>
  );
}
