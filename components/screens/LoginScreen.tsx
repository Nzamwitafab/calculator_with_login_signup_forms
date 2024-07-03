import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useTheme } from '@/components/ThemeContext';  // Adjust the import path as necessary
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../AuthContext'

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const { theme } = useTheme();  // Use the theme from your context
  const { logIn } = useAuth();  // Correctly using logIn from useAuth

  const auth = FIREBASE_AUTH;
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      logIn();  // Trigger login state change
      Alert.alert('Success', 'Login successful!');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  }
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
        onPress={signIn}
        color={theme === 'light' ? '#6200ee' : '#bb86fc'}  // Adjust button color based on theme
      />
    </View>
  );
};
export default LoginScreen;
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function logIn() {
  throw new Error('Function not implemented.');
}

