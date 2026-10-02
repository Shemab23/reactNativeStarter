import { View, type ColorValue, type ViewProps } from "react-native";
import { useThemeColors } from "../../theme/colors";
import { GradientBackground } from "./GradientBackground";

interface CardProps extends ViewProps {
  className?: string;
  variant?: "solid" | "gradient";
  gradientAngle?: number;
  colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  locations?: readonly [number, number, ...number[]];
  opacity?: number;
}

export function Card({
  children,
  className,
  style,
  variant = "solid",
  gradientAngle = 135,
  colors,
  locations,
  opacity,
  ...props
}: CardProps) {
  const c = useThemeColors();

  const baseCardStyles = {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: c.border || "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden" as const,
  };

  if (variant === "gradient") {
    return (
      <GradientBackground
        colors={colors || [c.card, c.surface]}
        angle={gradientAngle}
        locations={locations}
        opacity={opacity ?? 1}
        className={className}
        style={[baseCardStyles, style]}
        {...props}
      >
        {children}
      </GradientBackground>
    );
  }

  return (
    <View
      className={className}
      style={[baseCardStyles, { backgroundColor: c.card || "#ffffff" }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
