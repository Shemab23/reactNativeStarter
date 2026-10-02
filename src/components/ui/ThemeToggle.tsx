import { Text, TouchableOpacity, View } from "react-native";
import { useApp, type ThemePref } from "../../context/AppContext";

const OPTIONS: { value: ThemePref; label: string }[] = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export function ThemeToggle() {
  const { themePref, setThemePref } = useApp();
  return (
    <View className="flex-row gap-2">
      {OPTIONS.map((o) => {
        const active = themePref === o.value;
        return (
          <TouchableOpacity
            key={o.value}
            onPress={() => setThemePref(o.value)}
            className={`flex-1 items-center py-2 rounded-xl border ${
              active
                ? "bg-app-primary border-app-primary"
                : "bg-app-surface border-app-border"
            }`}
          >
            <Text
              className={
                active ? "text-app-on-primary font-semibold" : "text-app-text"
              }
            >
              {o.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
