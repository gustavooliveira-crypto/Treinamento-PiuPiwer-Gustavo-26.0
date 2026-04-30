import { View, Text } from "react-native";

type Props = {
  nome: string;
  user: string;
  texto: string;
  likes: number;
  comentarios: number;
};

export default function PostCard({
  nome,
  user,
  texto,
  likes,
  comentarios,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 24,
        padding: 18,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        marginBottom: 14,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#dbeafe",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ color: "#2563eb", fontSize: 20, fontWeight: "bold" }}>
            {nome[0]}
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0f172a" }}>
            {nome}
          </Text>
          <Text style={{ color: "#64748b" }}>{user}</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: "#334155",
          lineHeight: 23,
          marginTop: 14,
          marginBottom: 14,
        }}
      >
        {texto}
      </Text>

      <View style={{ flexDirection: "row", gap: 22 }}>
        <Text style={{ color: "#64748b" }}>♡ {likes}</Text>
        <Text style={{ color: "#64748b" }}>💬 {comentarios}</Text>
      </View>
    </View>
  );
}