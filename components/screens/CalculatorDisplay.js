import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/components/ThemeContext'; // Adjust the import path as necessary

const CalculatorDisplay = ({ displayValue }) => {
  const { theme } = useTheme(); // Use the theme from your context

  const dynamicStyles = StyleSheet.create({
    display: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10,
      backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a', // Dynamic background color
    },
    displayText: {
      color: theme === 'light' ? 'black' : 'white', // Dynamic text color
      fontSize: 36,
    },
  });

  return (
    <View style={dynamicStyles.display}>
      <Text style={dynamicStyles.displayText}>{displayValue}</Text>
    </View>
  );
};

export default CalculatorDisplay;
