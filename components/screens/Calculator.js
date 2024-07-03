import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from '@/components/ThemeContext';  // Adjust the import path as necessary
import CalculatorButton from "./CalculatorButton";
import CalculatorDisplay from "./CalculatorDisplay";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const { theme } = useTheme();  // Use the theme from your context

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

  const dynamicStyles = StyleSheet.create({
    calculator: {
      flex: 1,
      backgroundColor: theme === 'light' ? '#f3f4f6' : '#1e293b', // Dynamic background color
    },
    buttonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      // padding: 10,
    },
  });

  return (
    <View style={dynamicStyles.calculator}>
      <CalculatorDisplay displayValue={displayValue} />
      <View style={dynamicStyles.buttonsContainer}>
        {renderDigitButtons()}
        <CalculatorButton title="+" onPress={() => handleButtonPress("+")} />
        <CalculatorButton title="-" onPress={() => handleButtonPress("-")} />
        <CalculatorButton title="*" onPress={() => handleButtonPress("*")} />
        <CalculatorButton title="/" onPress={() => handleButtonPress("/")} />
        <CalculatorButton title="%" onPress={() => handleButtonPress("%")} />
        <CalculatorButton title="=" onPress={() => handleButtonPress("=")} />
        <CalculatorButton title="Clear" onPress={() => handleButtonPress("Clear")} />
        <CalculatorButton title="Delete" onPress={() => handleButtonPress("Delete")} />
      </View>
    </View>
  );
};

export default Calculator;
