import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useTheme } from '@/components/ThemeContext';  // Adjust the import path as necessary

export const SignupScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();  // Use the theme from your context

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signup data:', { firstName, secondName, email, dateOfBirth, password });
  };

  const dynamicStyles = StyleSheet.create({
    input: {
      height: 40,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: theme === 'light' ? 'gray' : 'white', // Adjust border color based on theme
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme === 'light' ? 'white' : '#333', // Adjust background color
      color: theme === 'light' ? 'black' : 'white', // Adjust text color
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a', // Adjust container background
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={firstName}
        onChangeText={setFirstName}
        style={dynamicStyles.input}
      />
      <TextInput
        placeholder="Second Name"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={secondName}
        onChangeText={setSecondName}
        style={dynamicStyles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={email}
        onChangeText={setEmail}
        style={dynamicStyles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Date of Birth"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        style={dynamicStyles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={theme === 'light' ? 'gray' : 'lightgray'} // Adjust placeholder text color
        value={password}
        onChangeText={setPassword}
        style={dynamicStyles.input}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={handleSignup}
        color={theme === 'light' ? '#6200ee' : '#bb86fc'}  // Adjust button color based on theme
      />
    </View>
  );
};

export default SignupScreen;
