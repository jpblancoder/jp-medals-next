import type { Country } from "../models/Country";

export function sortMedalsBy(countries: Country[], sort: string, limit: number = 10): Country[] {
  return [...countries].sort(getMedalsSortBy(sort)).slice(0, limit);
}

export function getMedalsSortBy(sort: string) {
  switch (sort) {
    case "total":
      return byTotalMedals;
    case "gold":
      return byGoldMedals;
    case "silver":
      return bySilverMedals;
    case "bronze":
      return byBronzeMedals;
    default:
      return byGoldMedals; // Default sort
  }
}

export function byTotalMedals(a: Country, b: Country) {
  const totalA = a.gold + a.silver + a.bronze;
  const totalB = b.gold + b.silver + b.bronze;
  if (totalA > totalB) return -1;
  if (totalA < totalB) return 1;
  return b.gold - a.gold;
}

export function byGoldMedals(a: Country, b: Country) {
  if (a.gold > b.gold) return -1;
  if (a.gold < b.gold) return 1;
  return b.silver - a.silver;
}

export function bySilverMedals(a: Country, b: Country) {
  if (a.silver > b.silver) return -1;
  if (a.silver < b.silver) return 1;
  return b.gold - a.gold;
}

export function byBronzeMedals(a: Country, b: Country) {
  if (a.bronze > b.bronze) return -1;
  if (a.bronze < b.bronze) return 1;
  return b.gold - a.gold;
}
