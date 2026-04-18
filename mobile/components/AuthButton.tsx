import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "google";
};

export function AuthButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
}: Props) {
  const bg =
    variant === "google"
      ? disabled || loading
        ? "bg-red-300"
        : "bg-red-500"
      : disabled || loading
      ? "bg-blue-300"
      : "bg-blue-600";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${bg} py-4 rounded-2xl items-center mb-4`}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white text-base font-bold">{title}</Text>
      )}
    </TouchableOpacity>
  );
}