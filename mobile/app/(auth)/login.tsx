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
  Image,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "~/contexts/AuthContext";

export default function LoginScreen() {
  const { signIn, signInWithGoogle, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    setIsLoading(true);

    const result = await signIn(email, password);
    console.log(result);

    if (!result.success) {
      Alert.alert("Falha no login", result.error || "Ocorreu um erro");
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);

    const result = await signInWithGoogle();

    if (!result.success) {
      Alert.alert("Falha no login", result.error || "Falha no login com Google");
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
        {/* topo */}
        <View style={{ alignItems: "center", marginBottom: 36 }}>
          <Image
            source={require('~/assets/logo.png')}
            style={{
              width: 84,
              height: 84,
              marginBottom: 16,
            }}
          />

          <Text
            style={{
              fontSize: 34,
              fontWeight: "bold",
              color: "#ADD8E6",
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

        {/* card */}
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
            Bem-vindo
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "#64748b",
              marginBottom: 20,
            }}
          >
            Entre na sua conta para continuar
          </Text>

          {/* abas falsas */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#eef2f7",
              borderRadius: 18,
              padding: 4,
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                paddingVertical: 12,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "#0f172a" }}>Entrar</Text>
            </View>

            <TouchableOpacity
              onPress={() => router.push("/(auth)/cadastro")}
              style={{
                flex: 1,
                paddingVertical: 12,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "600", color: "#64748b" }}>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>

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
              marginBottom: 20,
              borderRadius: 16,
              fontSize: 16,
              backgroundColor: "white",
            }}
          />

          <TouchableOpacity
            onPress={handleLogin}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#93c5fd" : "#2563eb",
              padding: 16,
              borderRadius: 16,
              marginBottom: 14,
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
                Entrar
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGoogleLogin}
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "#fca5a5" : "#ef4444",
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
                Entrar com Google
              </Text>
            )}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 18,
            }}
          >
            <Text style={{ color: "#64748b" }}>Não tem uma conta? </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/cadastro")}>
              <Text style={{ color: "#2563eb", fontWeight: "bold" }}>
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}