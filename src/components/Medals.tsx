"use client";
import React, { useCallback, useState } from "react";
import { Country } from "@/models/Country";
import { getMedalsSortBy } from "@/utils/medals";

export default function Medals({ data, sort }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState(data);

  const sortMedals = useCallback((sortType: string) => {
    setMedals((state) => {
      return [...state].sort(getMedalsSortBy(sortType));
    });
    setOrder(sortType);
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4 uppercase">Medal Count</h1>
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <span className="invisible">Index</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <span className="invisible">Flag</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <span className="invisible">Country</span>
            </th>
            <th
              className={`border border-gray-300 px-4 py-2 text-center ${order === "gold" ? "sort-active" : ""}`}
            >
              <a href="#gold" onClick={() => sortMedals("gold")}>
                🥇<span className="sr-only">Gold</span>
              </a>
            </th>
            <th
              className={`border border-gray-300 px-4 py-2 text-center ${order === "silver" ? "sort-active" : ""}`}
            >
              <a href="#silver" onClick={() => sortMedals("silver")}>
                🥈<span className="sr-only">Silver</span>
              </a>
            </th>
            <th
              className={`border border-gray-300 px-4 py-2 text-center ${order === "bronze" ? "sort-active" : ""}`}
            >
              <a href="#bronze" onClick={() => sortMedals("bronze")}>
                🥉<span className="sr-only">Bronze</span>
              </a>
            </th>
            <th
              className={`border border-gray-300 px-4 py-2 text-center uppercase ${order === "total" ? "sort-active" : ""}`}
            >
              <a href="#total" onClick={() => sortMedals("total")}>
                Total
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          {medals.map((c, index) => (
            <tr key={c.code}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{c.flag}</td>
              <td className="border border-gray-300 px-4 py-2">{c.code}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{c.gold}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{c.silver}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{c.bronze}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{c.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
