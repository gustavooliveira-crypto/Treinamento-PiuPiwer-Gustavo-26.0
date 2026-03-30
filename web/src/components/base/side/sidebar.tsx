'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`min-h-screen bg-blue-700 text-white transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4">
        <button onClick={() => setOpen(!open)} className="mb-6 text-2xl" type="button">
          ☰
        </button>

        <div className="mb-8">
          {open ? (
            <h1 className="text-2xl font-bold">PiuPiwer</h1>
          ) : (
            <h1 className="text-2xl font-bold">P</h1>
          )}
        </div>

        <nav className="flex flex-col gap-3">
          <Link href="/home" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-blue-600 transition">
            <span>🏠</span>
            {open && <span>Home</span>}
          </Link>

          <Link href="/perfil" className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-blue-600 transition">
            <span>👤</span>
            {open && <span>Perfil</span>}
          </Link>
        </nav>
      </div>
    </aside>
  );
}