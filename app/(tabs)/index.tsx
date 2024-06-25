import React from "react";
import { View, StyleSheet } from "react-native";
import Calculator from "../../components/Calculator";
import LoginScreen from "../../components/LoginScreen";
import SignupScreen from "../../components/SignupScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
  },
});
