import { View, Text, ScrollView, Image } from "react-native";

export default function PerfilScreen() {
  const meusPosts = [
    "Primeiro piu no app mobile!",
    "Fazendo a tela de perfil do Piupiwer.",
    "React Native é bem diferente do web, mas estou pegando o jeito.",
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f6f8fb" }}
      contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
    >
      <View style={{ alignItems: "center", marginTop: 24, marginBottom: 24 }}>
        <Image
          source={require("~/assets/logo.png")}
          style={{ width: 76, height: 76, marginBottom: 10 }}
        />

        <Text style={{ fontSize: 34, fontWeight: "bold", color: "#2563eb" }}>
          Piupiwer
        </Text>

        <Text style={{ color: "#64748b", fontSize: 15, marginTop: 4 }}>
          Seu perfil
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          borderRadius: 28,
          padding: 24,
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#e5e7eb",
        }}
      >
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            backgroundColor: "#dbeafe",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 40, color: "#2563eb", fontWeight: "bold" }}>
            G
          </Text>
        </View>

        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#0f172a" }}>
          Gustavo
        </Text>

        <Text style={{ color: "#64748b", marginTop: 4 }}>@gustavro</Text>

        <Text
          style={{
            textAlign: "center",
            color: "#334155",
            fontSize: 16,
            lineHeight: 23,
            marginTop: 16,
          }}
        >
          Estudante criando o app mobile do Piupiwer.
        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f8fafc",
            borderRadius: 20,
            paddingVertical: 16,
            paddingHorizontal: 12,
            marginTop: 22,
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 21, fontWeight: "bold", color: "#0f172a" }}>
              12
            </Text>
            <Text style={{ color: "#64748b" }}>Pius</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 21, fontWeight: "bold", color: "#0f172a" }}>
              128
            </Text>
            <Text style={{ color: "#64748b" }}>Seguidores</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 21, fontWeight: "bold", color: "#0f172a" }}>
              83
            </Text>
            <Text style={{ color: "#64748b" }}>Seguindo</Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          color: "#0f172a",
          marginTop: 28,
          marginBottom: 14,
        }}
      >
        Meus pius
      </Text>

      {meusPosts.map((texto, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            borderRadius: 22,
            padding: 18,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, color: "#334155", lineHeight: 23 }}>
            {texto}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}