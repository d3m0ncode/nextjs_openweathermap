"use client";


import { useEffect, useState } from "react";
import Forecast from "@/components/Forecast";
import Weather from "@/components/Weather";
export default function Home() {
  return (
    <div className="grid grid-rows justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{ position: "relative", height: "50vh", width: "50vw" }}>
        <Weather />
      </div>
      <br></br>
      <div style={{ position: "relative", height: "50vh", width: "50vw" }}>
        <Forecast />
      </div>
    </div>
  );
}
