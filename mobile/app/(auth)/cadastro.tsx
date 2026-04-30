import { useState } from "react";
import { View, Alert } from "react-native";
import { router } from "expo-router";

import {AuthHeader} from "~/components/AuthHeader";
import {AuthInput} from "~/components/AuthInput";
import {AuthButton} from "~/components/AuthButton";
import {AuthTabs} from "~/components/AuthTabs";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = () => {
    if (!nome || !email || !password || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (password !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    router.replace("/home");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f6f8fb",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <AuthHeader />

      <AuthTabs
        activeTab="cadastro"
        onLoginPress={() => router.push("/(auth)/login")}
        onCadastroPress={() => router.push("/(auth)/cadastro")}
      />

      <AuthInput
        label="Nome"
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <AuthInput
        label="Email"
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
      />

      <AuthInput
        label="Senha"
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AuthInput
        label="Confirmar senha"
        placeholder="********"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <AuthButton title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}