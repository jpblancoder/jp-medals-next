export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Medal Count Mini App</h1>
        <ul>
          <li>
            <a href="/medals/total">Sorted by Total Medals</a>
          </li>
          <li>
            <a href="/medals/gold">Sorted by Gold Medals</a>
          </li>
          <li>
            <a href="/medals/silver">Sorted by Silver Medals</a>
          </li>
          <li>
            <a href="/medals/bronze">Sorted by Bronze Medals</a>
          </li>
        </ul>
      </main>
    </div>
  );
}
