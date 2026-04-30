import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

type Props = {
  onPost: (texto: string) => void;
};

export default function CreatePost({ onPost }: Props) {
  const [texto, setTexto] = useState("");

  const handlePost = () => {
    if (texto.trim() === "") return;

    onPost(texto);
    setTexto("");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 26,
        padding: 18,
        borderWidth: 1,
        borderColor: "#e5e7eb",
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#0f172a",
        }}
      >
        Criar novo piu
      </Text>

      <TextInput
        placeholder="O que está acontecendo?"
        placeholderTextColor="#94a3b8"
        value={texto}
        onChangeText={setTexto}
        multiline
        style={{
          minHeight: 100,
          marginTop: 14,
          borderWidth: 1,
          borderColor: "#dbe3ef",
          borderRadius: 18,
          padding: 14,
          fontSize: 16,
          textAlignVertical: "top",
          backgroundColor: "#f8fafc",
        }}
      />

      <TouchableOpacity
        onPress={handlePost}
        style={{
          backgroundColor: "#2563eb",
          paddingVertical: 15,
          borderRadius: 18,
          marginTop: 14,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Postar
        </Text>
      </TouchableOpacity>
    </View>
  );
}