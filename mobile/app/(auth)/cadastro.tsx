import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "~/contexts/AuthContext";

export default function CadastroScreen() {
  const { signUp, isLoading: authLoading } = useAuth();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastro = async () => {
    if (!nome || !email || !password || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (password !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    setIsLoading(true);

    const result = await signUp(email, password, nome);
    console.log(result);

    if (!result.success) {
      Alert.alert("Falha no cadastro", result.error || "Ocorreu um erro");
    }

    setIsLoading(false);
  };

  if (authLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          backgroundColor: "#f6f8fb",
          paddingHorizontal: 24,
          paddingVertical: 32,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ alignItems: "center", marginBottom: 36 }}>
          <View
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              backgroundColor: "#3b82f6",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 34, color: "white" }}>🐦</Text>
          </View>

          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
              color: "#667085",
              marginBottom: 8,
            }}
          >
            Piupiwer
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#667085",
              textAlign: "center",
            }}
          >
            Conecte-se, compartilhe, descubra
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 28,
            padding: 24,
            borderWidth: 1,
            borderColor: "#e5e7eb",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            Criar conta
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#64748b",
              marginBottom: 20,
            }}
          >
            Cadastre-se para começar
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#eef2f7",
              borderRadius: 18,
              padding: 4,
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/(auth)/login")}
              style={{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "#64748b" }}>
                Entrar
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                paddingVertical: 12,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "#0f172a" }}>
                Cadastrar
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            Nome
          </Text>

          <TextInput
            placeholder="Seu nome"
            placeholderTextColor="#94a3b8"
            value={nome}
            onChangeText={setNome}
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              padding: 15,
              marginBottom: 16,
              borderRadius: 16,
              fontSize: 16,
              backgroundColor: "white",
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            Email
          </Text>

          <TextInput
            placeholder="seu@email.com"
            placeholderTextColor="#94a3b8"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              padding: 15,
              marginBottom: 16,
              borderRadius: 16,
              fontSize: 16,
              backgroundColor: "white",
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            Senha
          </Text>

          <TextInput
            placeholder="********"
            placeholderTextColor="#94a3b8"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              padding: 15,
              marginBottom: 16,
              borderRadius: 16,
              fontSize: 16,
              backgroundColor: "white",
            }}
          />

          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "#0f172a",
              marginBottom: 8,
            }}
          >
            Confirmar senha
          </Text>

          <TextInput
            placeholder="********"
            placeholderTextColor="#94a3b8"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#d1d5db",
              padding: 15,
              marginBottom: 20,
              borderRadius: 16,
              fontSize: 16,
              backgroundColor: "white",
            }}
          />

          <TouchableOpacity
            onPress={handleCadastro}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#93c5fd" : "#2563eb",
              padding: 16,
              borderRadius: 16,
            }}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Cadastrar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}