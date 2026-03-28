import Sidebar from "@/components/base/side/sidebar";
import Newscarousel from "@/components/home/Newscarousel";
import Postinput from "@/components/home/Postimput";
import Postcard from "@/components/home/Postcard";

const posts = [
  {
    nome: "João Silva",
    usuario: "@joaosilva",
    texto: "Primeiro post no PiuPiwer!",
    tempo: "há 10 min",
  },
  {
    nome: "Maria Souza",
    usuario: "@maria",
    texto: "Gostei bastante da interface.",
    tempo: "há 25 min",
  },
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