'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

import LoginOptionals from "@/components/auth/LoginOptionals";
import RequiredTag from "@/components/base/input/RequiredTag";

const GoogleAuthButton = dynamic(() => import('@/components/auth/GoogleLoginButton'));
const CredentialsButton = dynamic(() => import('@/components/auth/CredentialsButton'));
const ValidatedInput = dynamic(() => import('@/components/base/input/ValidatedInput'));

function LoginForm() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/remote-auth/sign-in/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          callbackURL: "/home",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(
          typeof data.error === "string"
            ? data.error
            : `Erro ao fazer login (${res.status})`
        );
        return;
      }

      toast.success("Login realizado com sucesso");
      window.location.href = "/home";
    } catch (error) {
      console.error("Erro no login:", error);
      toast.error("Não foi possível conectar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Entrar na plataforma
        </h2>
        <p className="mt-2 text-slate-600">
          Bem-vindo ao PiuPiwer.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <ValidatedInput
          title="E-mail"
          placeholder="seuemail@exemplo.com"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
          labelClassName="text-sm font-medium text-slate-700 mb-2 block"
          inputClassName="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition"
          iconContainerClassName="text-slate-400"
          required
        >
          <RequiredTag />
        </ValidatedInput>

        <ValidatedInput
          title="Senha"
          placeholder="Insira sua senha"
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
          overrideValidate={(val) => val.length >= 6}
          containerClassName="mt-4"
          labelClassName="text-sm font-medium text-slate-700 mb-2 block"
          inputClassName="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 focus:bg-white transition"
          iconContainerClassName="text-slate-400"
          required
        >
          <RequiredTag />
        </ValidatedInput>

        <div className="mt-4">
          <LoginOptionals />
        </div>

        <CredentialsButton
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </CredentialsButton>
      </form>

      <div className="flex items-center gap-4 py-6">
        <div className="flex-grow h-px bg-slate-300" />
        <p className="text-slate-400 text-sm">ou</p>
        <div className="flex-grow h-px bg-slate-300" />
      </div>

      <GoogleAuthButton disabled={loading} text="Entrar com Google" />

      <Link
        href="/cadastro"
        className="block w-fit mt-8 text-sm text-slate-600 group"
      >
        Ainda não tem uma conta?{" "}
        <span className="text-blue-600 border-b border-transparent group-hover:border-blue-600">
          Cadastre-se
        </span>
      </Link>
    </div>
  );
}

export default LoginForm;