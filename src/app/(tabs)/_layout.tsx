import { Tabs } from "expo-router";
import { House, List } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#38bdf8",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#0f172a", borderTopColor: "#1e293b" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: "Posts",
          tabBarIcon: ({ color, size }) => <List color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
