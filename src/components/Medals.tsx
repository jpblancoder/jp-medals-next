"use client";
import React, { useState } from "react";
import { Country } from "@/models/Country";

export default function Medals({ data, sort }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState(data);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 uppercase">Medal Count</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              <span className="invisible">Country</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              🥇<span className="sr-only">Gold</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              🥈<span className="sr-only">Silver</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              🥉<span className="sr-only">Bronze</span>
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center uppercase">Total</th>
          </tr>
        </thead>
        <tbody>
          {medals.map((c) => (
            <tr key={c.code}>
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
