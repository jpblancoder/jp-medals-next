"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Country } from "@/models/Country";
import { sortMedalsBy } from "@/utils/medals";
import Link from "next/link";

export default function Medals({ data = [], sort = "" }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState<Country[]>(() => sortMedalsBy(data, order, 10));
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMedals(sortMedalsBy(data, order, 10));
  }, [data, order]);

  useEffect(() => {
    const nextRoute = `/medals/${order}`;
    if (pathname !== nextRoute) {
      router.push(nextRoute);
    }
  }, [router, pathname, order]);

  const sortBy = useCallback((type: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setOrder(type);
    };
  }, []);

  const sortByGold = useCallback(() => sortBy("gold"), [sortBy]);
  const sortBySilver = useCallback(() => sortBy("silver"), [sortBy]);
  const sortByBronze = useCallback(() => sortBy("bronze"), [sortBy]);
  const sortByTotal = useCallback(() => sortBy("total"), [sortBy]);

  return (
    <div>
      <h1 className="text-2xl mb-4 uppercase">Medal Count</h1>
      {medals.length === 0 ? (
        <p className="mb-4">Failed to load medal count data. Please try again later.</p>
      ) : (
        <table className="border-collapse w-90">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-400 py-2">
                <span className="sr-only">Rank</span>
              </th>
              <th className="border-b-2 border-gray-400 py-2">
                <span className="sr-only">Flag</span>
              </th>
              <th className="border-b-2 border-gray-400 py-2">
                <span className="sr-only">Country</span>
              </th>
              <th
                className={`border-b-2 border-gray-400 text-2xl text-center ${order === "gold" ? "border-t-2" : ""}`}
              >
                <Link href="/medals/gold" className="cursor-pointer" onClick={sortByGold}>
                  🥇<span className="sr-only">Gold</span>
                </Link>
              </th>
              <th
                className={`border-b-2 border-gray-400 text-2xl text-center ${order === "silver" ? "border-t-2" : ""}`}
              >
                <Link href="/medals/silver" className="cursor-pointer" onClick={sortBySilver}>
                  🥈<span className="sr-only">Silver</span>
                </Link>
              </th>
              <th
                className={`border-b-2 border-gray-400 text-2xl text-center ${order === "bronze" ? "border-t-2" : ""}`}
              >
                <Link href="/medals/bronze" className="cursor-pointer" onClick={sortByBronze}>
                  🥉<span className="sr-only">Bronze</span>
                </Link>
              </th>
              <th
                className={`border-b-2 border-gray-400 py-2 text-center uppercase ${order === "total" ? "border-t-2" : ""}`}
              >
                <Link
                  href="/medals/total"
                  className="cursor-pointer uppercase"
                  onClick={sortByTotal}
                >
                  Total
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {medals.map((c, index) => (
              <tr key={c.code}>
                <td className="border-b border-gray-200 pr-2 py-2 text-right">{index + 1}</td>
                <td className="border-b border-gray-200 py-2">
                  {c.flag !== undefined ? (
                    <div
                      style={{
                        backgroundImage: `url(/flags.png)`,
                        backgroundPosition: `${c.code === "SUI" ? "-4px" : "0"} -${c.flag * 17}px`,
                        marginLeft: c.code === "SUI" ? "4px" : "0",
                        width: c.code === "SUI" ? "20px" : "28px",
                        height: "17px",
                      }}
                    />
                  ) : null}
                </td>
                <td className="border-b border-gray-200 pr-10 py-2 text-left">{c.code}</td>
                <td className="border-b border-gray-200 px-2 py-2 text-center">{c.gold}</td>
                <td className="border-b border-gray-200 px-2 py-2 text-center">{c.silver}</td>
                <td className="border-b border-gray-200 px-2 py-2 text-center">{c.bronze}</td>
                <td className="border-b border-gray-200 px-2 py-2 text-center">
                  <strong>{c.total}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
