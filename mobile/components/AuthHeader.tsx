import { View, Text } from "react-native";

export function AuthHeader() {
  return (
    <View className="items-center mb-10">
      <View className="w-20 h-20 rounded-3xl bg-blue-500 items-center justify-center mb-4">
        <Text className="text-white text-3xl">🐦</Text>
      </View>

      <Text className="text-5xl font-bold text-[#6a7290] mb-2">
        Piupiuwer
      </Text>

      <Text className="text-lg text-[#6a7290] text-center">
        Conecte-se, compartilhe, descubra
      </Text>
    </View>
  );
}