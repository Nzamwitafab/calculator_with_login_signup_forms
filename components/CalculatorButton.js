import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CalculatorButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 8,
    backgroundColor: "#374151",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});

export default CalculatorButton;
