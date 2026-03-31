import Sidebar from "@/components/base/side/sidebar";
import PostCard from "@/components/home/temp2";

const user = {
  nome: "Gustavo Henrique",
  usuario: "@gustavo",
  curso: "Engenharia da Computação",
  bio: "Estudante da Poli e Cortinthiano",
};

const stats = [
  { titulo: "Posts", valor: 2 },
  { titulo: "Curtidas", valor: 84 },
  { titulo: "Comentários", valor: 27 },
];

const posts = [
  {
    nome: "Gustavo Henrique",
    usuario: "@gustavo",
    texto: "Vai Corinthians!",
    tempo: "há 20 min",
  },
  {
    nome: "Gustavo Henrique",
    usuario: "@gustavo",
    texto: "O palmeiras não tem mundial",
    tempo: "há 1 h",
  },
];

export default function PerfilPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Perfil</h1>

          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-2xl font-bold text-blue-700">
                {user.nome.charAt(0)}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.nome}</h2>
                <p className="text-gray-500">{user.usuario}</p>
                <p className="text-sm text-gray-600 mt-1">{user.curso}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">{user.bio}</p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5"
              >
                <p className="text-sm text-gray-500">{item.titulo}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{item.valor}</h3>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Posts do usuário</h2>

            {posts.map((post, index) => (
              <PostCard
                key={index}
                nome={post.nome}
                usuario={post.usuario}
                texto={post.texto}
                tempo={post.tempo}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}