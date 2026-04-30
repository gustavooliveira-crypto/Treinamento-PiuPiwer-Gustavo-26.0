import { useState } from "react";
import { View, Alert } from "react-native";
import { router } from "expo-router";

import {AuthHeader} from "~/components/AuthHeader";
import {AuthInput} from "~/components/AuthInput";
import {AuthButton} from "~/components/AuthButton";
import {AuthTabs} from "~/components/AuthTabs";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
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
        activeTab="login"
        onLoginPress={() => router.push("/(auth)/login")}
        onCadastroPress={() => router.push("/(auth)/cadastro")}
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

      <AuthButton title="Entrar" onPress={handleLogin} />
    </View>
  );
}