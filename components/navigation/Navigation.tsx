import React, { useState } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Calculator from '../screens/Calculator';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { TabParamList, NavigationProps } from '../types';

const Tab = createBottomTabNavigator<TabParamList>();

const CustomHeader: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={{ marginLeft: 10 }}
    >
      <Icon name={Platform.OS === 'ios' ? 'ios-menu' : 'menu'} size={30} color={'#222'} />
    </TouchableOpacity>
  );
};

export default function BottomNavigation() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'SignupScreen') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === 'LoginScreen') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else {
            iconName = 'alert';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        headerTitle: '',
        headerLeft: () => <CustomHeader />,
      })}
    >
      <Tab.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ tabBarLabel: 'Sign Up' }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ tabBarLabel: 'Sign In' }}
      >
      </Tab.Screen>
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{ tabBarLabel: 'Calculator' }}
      >
      </Tab.Screen>
    </Tab.Navigator>
);
}