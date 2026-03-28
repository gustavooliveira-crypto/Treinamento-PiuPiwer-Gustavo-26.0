'use client';

import { useState } from "react";

const noticias = [
  {
    titulo: "Semana acadêmica começa na próxima segunda",
    descricao: "Confira a programação completa e os horários das palestras e workshops.",
  },
  {
    titulo: "Novo laboratório será aberto no prédio da engenharia",
    descricao: "O espaço será voltado para projetos práticos e atividades interdisciplinares.",
  },
  {
    titulo: "Inscrições abertas para monitorias",
    descricao: "Os alunos já podem se inscrever para participar do processo seletivo.",
  },
];

export default function newscarousel() {
  const [indice, setIndice] = useState(0);

  function voltar() {
    setIndice((prev) => (prev === 0 ? noticias.length - 1 : prev - 1));
  }

  function avancar() {
    setIndice((prev) => (prev === noticias.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Notícias</h2>

        <div className="flex gap-2">
          <button
            onClick={voltar}
            className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            type="button"
          >
            ←
          </button>
          <button
            onClick={avancar}
            className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-6 min-h-[180px] flex flex-col justify-center">
        <h3 className="text-2xl font-bold">{noticias[indice].titulo}</h3>
        <p className="mt-3 text-white/90 leading-relaxed">
          {noticias[indice].descricao}
        </p>
      </div>
    </div>
  );
}