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

  let medals: Country[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/medals.json`,
    );
    medals = await response.json();
  } catch (error) {
    console.error("Error fetching medals:", error);
  }

  medals = medals.map((c: Country) => ({
    ...c,
    total: c.gold + c.silver + c.bronze,
  }));

  medals.sort(getMedalsSortBy(sort));

  return (
    <main>
      <Medals data={medals} sort={sort} />
    </main>
  );
}
