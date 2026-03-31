type PostCardProps = {
  nome: string;
  usuario: string;
  texto: string;
  tempo: string;
};

export default function Postcard({ nome, usuario, texto, tempo }: PostCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
          {nome.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-gray-900">{nome}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{usuario}</span>
            <span>•</span>
            <span>{tempo}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-800 leading-relaxed">{texto}</p>

      <div className="flex gap-6 mt-4 text-sm text-gray-500">
        <button className="hover:text-blue-600 transition">Curtir</button>
        <button className="hover:text-blue-600 transition">Comentar</button>
        <button className="hover:text-blue-600 transition">Compartilhar</button>
      </div>
    </div>
  );
}