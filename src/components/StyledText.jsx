import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../theme";
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.normal,
  },
  colorPrimary: { color: theme.colors.primary },
  colorSecondary: { color: theme.colors.textSecondary },
  bold: { fontWeight: theme.fontWeight.bold },
  subheading: { fontSize: theme.fontSizes.subheading },
  textAlignCenter: { textAlign: "center" },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    align === "center" && styles.textAlignCenter,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
