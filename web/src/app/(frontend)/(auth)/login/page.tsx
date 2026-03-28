import Image from "next/image";
import LoginForm from './_components/LoginForm';

function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-white">
      
      {/* FORM */}
      <section className="w-full lg:w-[55%] flex items-center justify-center px-6 py-10 lg:py-0">
        <div className="w-full max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-6 py-8 sm:px-10 sm:py-10">
            <LoginForm />
          </div>
        </div>
      </section>

      {/* LADO DIREITO */}
      <section className="hidden lg:flex lg:w-[45%] relative overflow-hidden items-center justify-center bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400">
        
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
          
          <div className="flex flex-col items-center gap-4">

            {/* SUA LOGO */}
            <Image
              src="/piupiwerlogo.png"
              alt="logo"
              width={120}
              height={120}
            />

            <h1 className="font-bold text-white text-[52px] xl:text-[64px] leading-none">
              PIUPIWER
            </h1>
          </div>

          <p className="mt-6 max-w-md text-white text-lg xl:text-xl font-medium">
            Conectando a comunidade da Escola Politécnica da USP.
          </p>

        </div>
      </section>
    </main>
  );
}

export default LoginPage;