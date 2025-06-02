import { byBronzeMedals, byGoldMedals, bySilverMedals, byTotalMedals } from "@/utils/medals";
import Medals from "../../../components/Medals";

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

  if (sort === "total") {
    data = data.sort(byTotalMedals);
  } else if (sort === "gold") {
    data = data.sort(byGoldMedals);
  } else if (sort === "silver") {
    data = data.sort(bySilverMedals);
  } else if (sort === "bronze") {
    data = data.sort(byBronzeMedals);
  }

  return (
    <main>
      <Medals data={data} sort={sort} />
    </main>
  );
}
