import Sidebar from "@/components/base/side/sidebar";
import Newscarousel from "@/components/home/Newscarousel";
import Postinput from "@/components/home/PostInput";
import Postcard from "@/components/home/PostCard";

const posts = [
  {
    nome: "João Silva",
    usuario: "@joaosilva",
    texto: "Primeiro post no PiuPiwer!",
    tempo: "há 10 min",
  },
  {
    nome: "Memphis Depay",
    usuario: "@menphis",
    texto: "Estou animado para jogar no Corinthians! #VaiCorinthians",
    tempo: "há 30 min",
  },
  {
    nome: "Corinthians Oficial",
    usuario: "@corinthians",
    texto: "Vamos, Corinthians! #VaiCorinthians",
    tempo: "há 1 hora",
  }
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">Home</h1>

          <Newscarousel />

          <Postinput />

          <div className="mt-6">
            {posts.map((post, index) => (
              <Postcard
                key={index}
                nome={post.nome}
                usuario={post.usuario}
                texto={post.texto}
                tempo={post.tempo}
              />
            ))}
          </div>

        </div>
      </main>

    </div>
  );
}