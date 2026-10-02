import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../../global.css";
import { AppProvider } from "../context/AppContext";
import { queryClient } from "../services/queryClient";
import { useTheme } from "../theme/colors";

function ThemedShell() {
  const { name, colors, style } = useTheme();
  return (
    <View className="flex-1" style={style}>
      <StatusBar style={name === "dark" ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.bg },
        }}
      />
    </View>
  );
}

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ThemedShell />
      </AppProvider>
    </QueryClientProvider>
  );
}
