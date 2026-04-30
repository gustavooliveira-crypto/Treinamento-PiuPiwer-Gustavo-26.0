import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">PiuPiwer</h1>
        <p className="mt-4">Conectando a comunidade da Poli</p>

        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/login" className="bg-white text-blue-600 px-6 py-2 rounded-lg">
            Entrar
          </Link>

          <Link href="/cadastro" className="border border-white px-6 py-2 rounded-lg">
            Cadastro
          </Link>
        </div>
      </div>
    </main>
  );
}