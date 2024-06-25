import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonPress = (buttonTitle) => {
    // Handle button press
    if (buttonTitle === "Clear") {
      setDisplayValue("");
    } else if (buttonTitle === "Delete") {
      setDisplayValue((prevDisplayValue) =>
        prevDisplayValue.slice(0, prevDisplayValue.length - 1)
      );
    } else if (buttonTitle === "=") {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else {
      setDisplayValue((prevDisplayValue) => prevDisplayValue + buttonTitle);
    }
  };

  const renderDigitButtons = () => {
    const digitButtons = [];
    for (let i = 0; i <= 9; i++) {
      digitButtons.push(
        <CalculatorButton
          key={i.toString()}
          title={i.toString()}
          onPress={() => handleButtonPress(i.toString())}
        />
      );
    }
    return digitButtons;
  };

  return (
    <View style={styles.calculator}>
      <CalculatorDisplay displayValue={displayValue} />
      <View style={styles.buttonsContainer}>
        {renderDigitButtons()}
        <CalculatorButton title="+" onPress={() => handleButtonPress("+")} />
        <CalculatorButton title="-" onPress={() => handleButtonPress("-")} />
        <CalculatorButton title="*" onPress={() => handleButtonPress("*")} />
        <CalculatorButton title="/" onPress={() => handleButtonPress("/")} />
        <CalculatorButton title="%" onPress={() => handleButtonPress("%")} />
        <CalculatorButton title="=" onPress={() => handleButtonPress("=")} />
        <CalculatorButton
          title="Clear"
          onPress={() => handleButtonPress("Clear")}
        />
        <CalculatorButton
          title="Delete"
          onPress={() => handleButtonPress("Delete")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
    backgroundColor: "#1e293b",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Calculator;
