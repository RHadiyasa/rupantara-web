"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">RAFI</h1>
      <Link href={"/profile"}>
        <div className="border-2 border-black px-4 py-2 bg-slate-900 rounded-lg">
          Profile Page
        </div>
      </Link>
    </div>
  );
}
