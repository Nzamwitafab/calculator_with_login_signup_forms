import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: undefined;
};

export type TabParamList = {
  SignupScreen: undefined;
  LoginScreen: undefined;
  Calculator: undefined;
};

export type RootDrawerParamList = {
  MainTabs: undefined;
};

export type NavigationProps = NavigationProp<ParamListBase>;