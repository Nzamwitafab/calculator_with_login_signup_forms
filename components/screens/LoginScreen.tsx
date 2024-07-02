import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useTheme } from '@/components/ThemeContext';  // Adjust the import path as necessary

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();  // Use the theme from your context

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login attempt with:', { email, password });
  };

  const dynamicStyles = StyleSheet.create({
    input: {
      height: 50,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme === 'light' ? 'gray' : 'white', // Adjust border color based on theme
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme === 'light' ? 'white' : '#333', // Adjust background color
      color: theme === 'light' ? 'black' : 'white', // Adjust text color
    },
    buttonText: {
      color: theme === 'light' ? 'black' : 'white', // Button text color
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding:20,
      backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a', // Adjust container background
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={email}
        onChangeText={setEmail}
        style={dynamicStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={password}
        onChangeText={setPassword}
        style={dynamicStyles.input}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        color={theme === 'light' ? '#6200ee' : '#bb86fc'}  // Adjust button color based on theme
      />
    </View>
  );
};
export default LoginScreen;
