import { TextInput, View, Text, TextInputProps } from "react-native";

type Props = TextInputProps & {
  label: string;
};

export function AuthInput({ label, ...props }: Props) {
  return (
    <View className="mb-4">
      <Text className="text-base font-semibold text-[#0f172a] mb-2">
        {label}
      </Text>

      <TextInput
        placeholderTextColor="#94a3b8"
        className="border border-gray-300 rounded-2xl px-4 py-4 text-base bg-white"
        {...props}
      />
    </View>
  );
}