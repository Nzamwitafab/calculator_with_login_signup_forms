import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useTheme } from '@/components/ThemeContext';  // Adjust the import path as necessary
import { FIREBASE_AUTH } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignupScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { theme } = useTheme();

  const auth = FIREBASE_AUTH;
  const SignUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert('Success', 'Check your email!');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Sign Up Failed', error.message);
    } finally {
      setLoading(false);
    }
  }

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
        onPress={SignUp}
        color={theme === 'light' ? '#6200ee' : '#bb86fc'}  // Adjust button color based on theme
      />
    </View>
  );
};

export default SignupScreen;
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

