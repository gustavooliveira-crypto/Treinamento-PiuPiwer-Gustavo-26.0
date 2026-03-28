'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`h-screen bg-blue-700 text-white flex flex-col transition-all duration-300 ${open ? 'w-64' : 'w-20'}`}>

      {/* BOTÃO */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 text-left"
      >
        ☰
      </button>

      {/* LOGO */}
      <div className="px-4 mb-6">
        {open && <h1 className="text-2xl font-bold">PiuPiwer</h1>}
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-4 px-2">

        <Link href="/home" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600">
          <span>🏠</span>
          {open && <span>Home</span>}
        </Link>

        <Link href="/perfil" className="flex items-center gap-3 p-2 rounded hover:bg-blue-600">
          <span>👤</span>
          {open && <span>Perfil</span>}
        </Link>

      </nav>

    </div>
  );
}