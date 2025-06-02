"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Country } from "@/models/Country";
import { sortMedalsBy } from "@/utils/medals";

export default function Medals({ data = [], sort = "" }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState<Country[]>([]);

  useEffect(() => {
    setMedals(sortMedalsBy(data, order, 10));
  }, [data, order]);

  return (
    <div>
      <h1 className="text-2xl mb-4 uppercase">Medal Count</h1>
      {medals.length === 0 ? (
        <p className="mb-4">Failed to load medal count data. Please try again later.</p>
      ) : (
        <table className="border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                <span className="sr-only">Index</span>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                <span className="sr-only">Flag</span>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                <span className="sr-only">Country</span>
              </th>
              <th
                className={`border border-gray-300 px-4 py-2 text-center ${order === "gold" ? "sort-active" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("gold")}>
                  🥇<span className="sr-only">Gold</span>
                </button>
              </th>
              <th
                className={`border border-gray-300 px-4 py-2 text-center ${order === "silver" ? "sort-active" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("silver")}>
                  🥈<span className="sr-only">Silver</span>
                </button>
              </th>
              <th
                className={`border border-gray-300 px-4 py-2 text-center ${order === "bronze" ? "sort-active" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("bronze")}>
                  🥉<span className="sr-only">Bronze</span>
                </button>
              </th>
              <th
                className={`border border-gray-300 px-4 py-2 text-center uppercase ${order === "total" ? "sort-active" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("total")}>
                  Total
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {medals.map((c, index) => (
              <tr key={c.code}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {c.flag ? (
                    <Image
                      src="/flags.png"
                      alt={`${c.code} flag`}
                      width={27}
                      height={17}
                      style={{ objectPosition: `0 ${c.flag}px` }}
                    />
                  ) : null}
                </td>
                <td className="border border-gray-300 px-4 py-2">{c.code}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{c.gold}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{c.silver}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{c.bronze}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{c.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
