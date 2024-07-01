import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalculatorDisplay = ({ displayValue }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#111827",
  },
  displayText: {
    color: "white",
    fontSize: 36,
  },
});

export default CalculatorDisplay;
