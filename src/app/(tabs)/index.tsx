import { Card } from "@/components/ui/Card";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { Badge } from "../../components/ui/Badge";
import { Screen } from "../../components/ui/Screen";
import { ThemeToggle } from "../../components/ui/ThemeToggle";
import { useHomeModel } from "../../features/home/useHomeModel";
import { useThemeColors } from "../../theme/colors";

export default function HomeScreen() {
  const { model, isLoading, error, refetch } = useHomeModel();
  const c = useThemeColors();

  return (
    <Screen name="Home">
      {isLoading && <ActivityIndicator color={c.brand} />}

      {error && (
        <TouchableOpacity onPress={() => refetch()}>
          <Text className="text-app-danger">
            {error.message}. Tap to retry.
          </Text>
        </TouchableOpacity>
      )}

      <View className="gap-4">
        {/* =========================================================
            USAGE 1: Theme Adaptive Gradient Card (Your Profile)
            ========================================================= */}
        {model && (
          <Card
            variant="gradient"
            gradientAngle={145}
            opacity={1}
            className="gap-1"
          >
            <Text className="text-app-heading text-xl font-semibold">
              {model.userName}
            </Text>
            <Text className="text-app-muted">{model.email}</Text>
            <Text className="text-app-text mt-2 mb-1">Your saved posts</Text>
            <Badge label={`Favorites: ${model.favoritesCount}`} />
          </Card>
        )}

        {/* =========================================================
            USAGE 2: Custom Multi-Color Card with Percentage Stops
            ========================================================= */}
        <Card
          variant="gradient"
          gradientAngle={150}
          opacity={0.5}
          colors={["#3b82f6", "#8b5cf6", "#ec4899"]}
          locations={[70, 80, 100]}
        >
          <Text className="text-white text-lg font-bold">Premium Metrics</Text>
          <Text className="text-white/80 text-sm">
            Custom localized color boundaries configured via clean percentage
            numbers.
          </Text>
        </Card>

        {/* =========================================================
            USAGE 3: Standard Solid Card (Default)
            ========================================================= */}
        <Card className="gap-2">
          <Text className="text-app-heading text-base font-medium">
            System Status
          </Text>
          <Text className="text-app-muted text-sm">
            All services operational. This uses your regular solid card
            background.
          </Text>
        </Card>
      </View>

      {/* Theme Toggler Settings Area */}
      <View className="mt-6 gap-2">
        <Text className="text-app-muted text-sm">Theme</Text>
        <ThemeToggle />
      </View>
    </Screen>
  );
}
