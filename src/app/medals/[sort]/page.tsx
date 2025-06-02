import { getMedalsSortBy } from "@/utils/medals";
import Medals from "../../../components/Medals";
import { Country } from "@/models/Country";

interface PageProps {
  params: {
    sort: string;
  };
}

const SORT_PARAMS = ["total", "gold", "silver", "bronze"];
const SORT_DEFAULT = "gold";

export default async function MedalsSortPage({ params }: PageProps) {
  let { sort } = params;
  if (!SORT_PARAMS.includes(sort)) {
    sort = SORT_DEFAULT;
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/medals.json`,
  );
  let data = await response.json();
  if (!data) {
    throw new Error("Failed to fetch medals data");
  }

  data = data.map((c: Country) => ({
    code: c.code,
    gold: c.gold,
    silver: c.silver,
    bronze: c.bronze,
    total: c.gold + c.silver + c.bronze,
  }));

  data.sort(getMedalsSortBy(sort));

  return (
    <main>
      <Medals data={data} sort={sort} />
    </main>
  );
}
