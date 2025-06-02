"use client";
import React, { useEffect, useState } from "react";
import { Country } from "@/models/Country";
import { sortMedalsBy } from "@/utils/medals";

export default function Medals({ data = [], sort = "" }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState<Country[]>(() => sortMedalsBy(data, order, 10));

  useEffect(() => {
    setMedals(sortMedalsBy(data, order, 10));
  }, [data, order]);

  return (
    <div>
      <h1 className="text-2xl mb-4 uppercase">Medal Count</h1>
      {medals.length === 0 ? (
        <p className="mb-4">Failed to load medal count data. Please try again later.</p>
      ) : (
        <table className="border-collapse w-100">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-400 py-2">
                <span className="sr-only">Rank</span>
              </th>
              <th className="border-b-2 border-gray-400 px-2 py-2">
                <span className="sr-only">Flag</span>
              </th>
              <th className="border-b-2 border-gray-400 px-2 py-2">
                <span className="sr-only">Country</span>
              </th>
              <th
                className={`border-b-2 border-gray-400 px-2 py-2 text-center ${order === "gold" ? "border-t-2" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("gold")}>
                  🥇<span className="sr-only">Gold</span>
                </button>
              </th>
              <th
                className={`border-b-2 border-gray-400 px-2 py-2 text-center ${order === "silver" ? "border-t-2" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("silver")}>
                  🥈<span className="sr-only">Silver</span>
                </button>
              </th>
              <th
                className={`border-b-2 border-gray-400 px-2 py-2 text-center ${order === "bronze" ? "border-t-2" : ""}`}
              >
                <button type="button" className="cursor-pointer" onClick={() => setOrder("bronze")}>
                  🥉<span className="sr-only">Bronze</span>
                </button>
              </th>
              <th
                className={`border-b-2 border-gray-400 px-2 py-2 text-center uppercase ${order === "total" ? "border-t-2" : ""}`}
              >
                <button
                  type="button"
                  className="cursor-pointer uppercase"
                  onClick={() => setOrder("total")}
                >
                  Total
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {medals.map((c, index) => (
              <tr key={c.code}>
                <td className="border-b border-gray-200 py-2 text-right">{index + 1}</td>
                <td className="border-b border-gray-200 px-2 py-2">
                  {c.flag !== undefined ? (
                    <div
                      style={{
                        backgroundImage: `url(/flags.png)`,
                        backgroundPosition: `0 -${c.flag * 17}px`,
                        width: "28px",
                        height: "17px",
                      }}
                    />
                  ) : null}
                </td>
                <td className="border-b border-gray-200 pr-12 py-2 text-left">{c.code}</td>
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
