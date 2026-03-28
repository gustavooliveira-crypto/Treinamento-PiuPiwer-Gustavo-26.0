'use client';

import { useState } from "react";

export default function postimput() {
  const [texto, setTexto] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Criar publicação</h2>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="No que você está pensando?"
        className="w-full min-h-[110px] resize-none rounded-xl border border-gray-300 p-4 outline-none focus:border-blue-500"
      />

      <div className="flex items-center justify-between mt-3">
        <span className="text-sm text-gray-500">{texto.length} caracteres</span>

        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
          type="button"
        >
          Publicar
        </button>
      </div>
    </div>
  );
}