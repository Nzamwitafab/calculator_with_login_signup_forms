import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ThemeContext';
import { DrawerProvider } from '../../components/DrawerContext';
import AppNavigator from '@/components/AppNavigator';
import useNetworkStatus from '../../components/UseNetworkStatus'; // Import the custom network status hook
import useBatteryMonitor from '../../components/useBatteryMonitor'; // Import the custom battery monitor hook
import { View, Text } from 'react-native';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/components/firebaseConfig';
import { AuthProvider } from '@/components/AuthContext';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const connectionStatus = useNetworkStatus(); // Use the custom network status hook
  const batteryMonitor = useBatteryMonitor(); // Use the custom battery monitor hook

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, setUser);
    return unsubscribe; // Cleanup subscription
  }, []);
  return (
    <ThemeProvider>
      <AuthProvider>
      <DrawerProvider>
        
        <AppNavigator />
        {connectionStatus && (
          <View style={{ position: 'absolute', top: '10%', width: '100%', height: 60, backgroundColor: connectionStatus.color, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              {connectionStatus.message}
            </Text>
          </View>
        )}
        {batteryMonitor !== null && (
          <View style={{ position: 'absolute', bottom: '10%', width: '100%', height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              Battery Level: {batteryMonitor}%
            </Text>
          </View>
        )}
      </DrawerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
function userState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.');
}

function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}

