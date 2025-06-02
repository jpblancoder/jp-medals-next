import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Medal Count Mini App</h1>
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
    </div>
  );
}
