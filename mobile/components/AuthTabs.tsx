import { View, TouchableOpacity, Text } from "react-native";

type Props = {
  activeTab: "login" | "cadastro";
  onLoginPress: () => void;
  onCadastroPress: () => void;
};

export function AuthTabs({
  activeTab,
  onLoginPress,
  onCadastroPress,
}: Props) {
  return (
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
        onPress={onLoginPress}
        style={{
          flex: 1,
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: "center",
          backgroundColor: activeTab === "login" ? "white" : "transparent",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            color: activeTab === "login" ? "#0f172a" : "#64748b",
          }}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onCadastroPress}
        style={{
          flex: 1,
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: "center",
          backgroundColor: activeTab === "cadastro" ? "white" : "transparent",
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            color: activeTab === "cadastro" ? "#0f172a" : "#64748b",
          }}
        >
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}