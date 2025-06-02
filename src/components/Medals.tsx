"use client";
import React, { useState } from "react";
import { Country } from "@/models/Country";

export default function Medals({ data, sort }: { data: Country[]; sort: string }) {
  const [order, setOrder] = useState(sort);
  const [medals, setMedals] = useState(data);

  return (
    <div>
      <h1>Medal Count</h1>
      <pre>{JSON.stringify(medals, null, 2)}</pre>
    </div>
  );
}
