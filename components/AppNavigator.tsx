import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigation from './navigation/Navigation';
import CustomDrawerContent from './CustomDrawerContent';
import { RootDrawerParamList } from '../components/types';
import { useTheme } from './ThemeContext';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function AppNavigator() {
  const { theme } = useTheme(); // Use the theme from your context

  const drawerStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#1a1a1a', // Adjust drawer background color based on theme
    width: 200,
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle, // Apply dynamic drawer style
        headerShown: false,
      }}
    >
      <Drawer.Screen name="MainTabs" component={BottomNavigation} />
    </Drawer.Navigator>
  );
}
